import './Contact.css'
import './ContactResponsive.css'
import { useState } from 'react';

const Contact: React.FC = () => {
    const [result, setResult] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);

    const onSubmit = async (
        event: React.FormEvent<HTMLFormElement>
    ): Promise<void> => {
        event.preventDefault();
        setLoading(true);

        const form = event.currentTarget;
        const formData = new FormData(form);

        formData.append(
            "access_key",
            "24c5d894-8609-4c05-8bcb-5c96a7746c49"
        );

        try {
            const response = await fetch(
                "https://api.web3forms.com/submit",
                {
                    method: "POST",
                    body: formData
                }
            );

            const data: { success: boolean; message?: string } =
                await response.json();

            setResult(
                data.success
                    ? "Mensaje enviado con éxito"
                    : "Error al enviar el mensaje"
            );

            if (data.success) {
                form.reset();
            }
        } catch (error) {
            setResult("Error de conexión");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="Contact">
            <h2>Contacto</h2>
            <div className='form'>
                <form onSubmit={onSubmit}>
                    <input type="text" placeholder="Nombre | Name" name="name" required />
                    <input type="email" placeholder="E-mail" name="email" required />
                    <input type="text" placeholder="Asunto | Subjet" name="Subject" required />
                    <textarea placeholder="Mensaje | Message" name="message" required></textarea>
                    <button type="submit" disabled={loading}>{loading ? "Enviando..." : "Enviar"}</button>
                    <p>{result}</p>
                </form>
            </div>
        </div>
    )
}
export default Contact;