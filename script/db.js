// ============================================================
// Configuración e Integración con Supabase (db.js)
// ============================================================

// 1. Reemplaza estos valores con las credenciales de tu proyecto Supabase.
// Los encuentras en tu Dashboard de Supabase: Settings -> API
const SUPABASE_URL = 'https://plotvtslpnfhhtkrxabi.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_gXPhb0gViOp2VNNxzPZ5-Q_fMp9ZZ7o';

// Renombrado a supabaseClient para evitar el choque de nombres con la CDN
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
        password: password
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
 * Obtiene el usuario actualmente autenticado en la sesión.
 */
async function getCurrentUser() {
    if (!supabaseClient) return null;
    const { data: { user } } = await supabaseClient.auth.getUser();
    return user;
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