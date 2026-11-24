// ============================================================
// Configuración e Integración con Supabase (db.js)
// ============================================================

const SUPABASE_URL = 'https://plotvtslpnfhhtkrxabi.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_gXPhb0gViOp2VNNxzPZ5-Q_fMp9ZZ7o';

let supabaseClient = null;

if (typeof window.supabase !== 'undefined' && window.supabase.createClient) {
    if (SUPABASE_URL.includes('TU-PROYECTO')) {
        console.info('Supabase: Ejecutando en modo simulación (fallback) hasta configurar las credenciales en db.js.');
    } else {
        supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
    }
} else {
    console.warn('La librería @supabase/supabase-js no se encuentra cargada.');
}

/**
 * Inicia sesión utilizando correo y contraseña.
 */
async function loginUser(email, password) {
    if (!supabaseClient) {
        return mockLogin(email, password);
    }

    const { data, error } = await supabaseClient.auth.signInWithPassword({
        email: email,
        password: password
    });

    return { data, error };
}

/**
 * Registra un nuevo usuario utilizando correo y contraseña.
 */
async function registerUser(email, password) {
    if (!supabaseClient) {
        return mockRegister(email, password);
    }

    const { data, error } = await supabaseClient.auth.signUp({
        email: email,
        password: password,
        options: {
            emailRedirectTo: 'https://anfc2004.github.io/GIRS/sesion.html'
        }
    });

    return { data, error };
}

/**
 * Cierra la sesión activa del usuario.
 */
async function logoutUser() {
    if (supabaseClient) {
        const { error } = await supabaseClient.auth.signOut();
        if (error) console.error('Error al cerrar sesión:', error.message);
    }
    window.location.href = 'sesion.html';
}

/**
 * Obtiene el usuario actualmente autenticado leyendo primero la sesión local
 * y respaldando con consulta directa al servidor de Supabase Auth.
 */
async function getCurrentUser() {
    if (!supabaseClient) return null;

    const { data: { session } } = await supabaseClient.auth.getSession();
    if (session && session.user) {
        return session.user;
    }

    const { data: { user } } = await supabaseClient.auth.getUser();
    return user || null;
}

/**
 * Simulación de autenticación (fallback local).
 */
async function mockLogin(email, password) {
    return new Promise((resolve) => {
        setTimeout(() => {
            if (email === 'admin@ejemplo.com' && password === '123456') {
                resolve({
                    data: { user: { email, id: 'mock-user-id-123' } },
                    error: null
                });
            } else {
                resolve({
                    data: null,
                    error: { 
                        message: 'Credenciales inválidas. (Modo prueba: usa admin@ejemplo.com / 123456 o configura SUPABASE_URL en db.js)' 
                    }
                });
            }
        }, 800);
    });
}

/**
 * Simulación de registro de usuario (fallback local).
 */
async function mockRegister(email, password) {
    return new Promise((resolve) => {
        setTimeout(() => {
            if (email && password.length >= 6) {
                resolve({
                    data: { user: { email, id: 'mock-new-user-id' } },
                    error: null
                });
            } else {
                resolve({
                    data: null,
                    error: { 
                        message: 'La contraseña debe tener al menos 6 caracteres.' 
                    }
                });
            }
        }, 800);
    });
}

/**
 * Guarda un UID en la base de datos asociado al usuario autenticado.
 */
async function saveUserUid(uid) {
    const cleanUid = String(uid || '').trim();

    if (!supabaseClient) {
        const localUids = JSON.parse(localStorage.getItem('mock_saved_uids') || '[]');
        if (!localUids.includes(cleanUid)) {
            localUids.push(cleanUid);
            localStorage.setItem('mock_saved_uids', JSON.stringify(localUids));
        }
        return { error: null };
    }

    const user = await getCurrentUser();
    if (!user) {
        return { error: { message: 'Debes iniciar sesión para guardar el UID.' } };
    }

    const { error } = await supabaseClient
        .from('saved_uids')
        .upsert(
            { user_id: user.id, uid: cleanUid },
            { onConflict: 'user_id,uid', ignoreDuplicates: true }
        );

    return { error };
}

/**
 * Obtiene la lista de UIDs guardados del usuario autenticado.
 */
async function getSavedUids() {
    if (!supabaseClient) {
        const localUids = JSON.parse(localStorage.getItem('mock_saved_uids') || '[]');
        return localUids.map(uid => ({ uid }));
    }

    const user = await getCurrentUser();
    if (!user) return [];

    const { data, error } = await supabaseClient
        .from('saved_uids')
        .select('id, uid, created_at')
        .order('created_at', { ascending: false });

    if (error) {
        console.error('Error al obtener UIDs guardados:', error.message);
        return [];
    }

    return data || [];
}