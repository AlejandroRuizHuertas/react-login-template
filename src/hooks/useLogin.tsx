

export function useLogin() {

    const database = [{ email: "john@doe.es", password: "1234" }]

    //Lo único que hace es comprobar si el email y pwd están en el array de arriba. Para cosas más complejas, hay que modificar este hook en general
    function authenticate(email: string, password: string) {
        let value = database.find((entry) => entry.email == email && entry.password == password)
        value && localStorage.setItem("authenticated", "true");
        if (value)
            return true;
        else
            return false;
    }

    function isAuthenticated() {
        return localStorage.getItem("authenticated") == "true";
    }

    function logout() {
        return localStorage.removeItem("authenticated")
    }


    return { authenticate, isAuthenticated, logout }

}