document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('appointment-form');
    const confirmationMessage = document.getElementById('confirmation-message');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const name = form.name.value;
        const email = form.email.value;
        const date = form.date.value;
        const time = form.time.value;

        confirmationMessage.innerText = `Consulta agendada para ${date} às ${time}. Nome: ${name}, E-mail: ${email}`;
        form.reset();
    });
});
