// ============================================================
// Configuración e Integración con Supabase (db.js)
// ============================================================

// 1. Reemplaza estos valores con las credenciales de tu proyecto Supabase.
// Los encuentras en tu Dashboard de Supabase: Settings -> API
const SUPABASE_URL = 'https://plotvtslpnfhhtkrxabi.supabase.co';
const SUPABASE_ANON_KEY = '';

// 2. Inicializar el cliente de Supabase 
let supabase = null;

if (typeof window.supabase !== 'undefined' && window.supabase.createClient) {
    // Si las claves aún son los marcadores de posición, avisar en consola
    if (SUPABASE_URL.includes('TU-PROYECTO')) {
        console.info('Supabase: Ejecutando en modo simulación (fallback) hasta configurar las credenciales en db.js.');
    } else {
        supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
    }
} else {
    console.warn('La librería @supabase/supabase-js no se encuentra cargada.');
}

/**
 * Inicia sesión utilizando correo y contraseña.
 * @param {string} email 
 * @param {string} password 
 * @returns {Promise<{data: object|null, error: object|null}>}
 */
async function loginUser(email, password) {
    // Si no está configurado Supabase, se utiliza la función de simulación previa
    if (!supabase) {
        return mockLogin(email, password);
    }

    // Autenticación con Supabase Auth
    const { data, error } = await supabase.auth.signInWithPassword({
        email: email,
        password: password
    });

    return { data, error };
}

/**
 * Registra un nuevo usuario utilizando correo y contraseña.
 * @param {string} email 
 * @param {string} password 
 * @returns {Promise<{data: object|null, error: object|null}>}
 */
async function registerUser(email, password) {
    if (!supabase) {
        return mockRegister(email, password);
    }

    const { data, error } = await supabase.auth.signUp({
        email: email,
        password: password
    });

    return { data, error };
}

/**
 * Cierra la sesión activa del usuario.
 */
async function logoutUser() {
    if (supabase) {
        const { error } = await supabase.auth.signOut();
        if (error) console.error('Error al cerrar sesión:', error.message);
    }
    window.location.href = 'sesion.html';
}

/**
 * Obtiene el usuario actualmente autenticado en la sesión.
 */
async function getCurrentUser() {
    if (!supabase) return null;
    const { data: { user } } = await supabase.auth.getUser();
    return user;
}

/**
 * Simulación de autenticación (fallback local).
 * Permite probar la interfaz antes de enlazar las credenciales reales de Supabase.
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