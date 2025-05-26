document.addEventListener('DOMContentLoaded', () => {
    // Función para actualizar el mensaje
    function updateMessage(newMessage) {
        const messageElement = document.getElementById('custom-message');
        if (messageElement) {
            messageElement.textContent = newMessage;
        }
    }

    // Puedes llamar a esta función cuando quieras cambiar el mensaje.
    // Por ejemplo, para probar, puedes descomentar la siguiente línea:
    // updateMessage("Mi reina, mi  Lourdes, cuando tube el placer de verte, no me imaginaba la benediction que llegaría de parte de Dios, en ti, al pasar el tiempo el mismo día en que te vi, que tuvimos el espacio para hablar tu y yo, me fuiste agradado y algo en mi hizo click, lo que me faltaba para construir mi futuro eras tu  y dios sabe porque te mando en estos momentos de mi vida, cada que tengo la oportunidad le doy gracias a Dios por esa oportunidad que me hizo conocer a la mujer que hoy en día amo y planeo construir un futuro con ella, mejor mujer que tú, para mi no hay, se que todavía somos Jovenes, pero quisiera arriesgarme, sin importar lo que pase. Tú haz sido la mujer que verdaderamente eh amado, me esforzare para que los planes que tengo contigo todos y cada uno se cumplan con Dios delante. Att; Tu niño que te ama..");

    // O podrías tener un formulario para que el usuario escriba su mensaje.
    // Aquí solo lo dejaremos con el mensaje predeterminado de HTML
    // y te muestro cómo lo cambiarías con JS si lo necesitas.
});

// Ejemplo de cómo podrías cambiar el mensaje desde la consola del navegador
// o si tuvieras un botón para ello:
// updateMessage("¡Este es un mensaje nuevo desde JavaScript!");