export default function Kontakt() {
    return (
        <div className="flex-grow flex flex-col md:flex-row my-10">
            {/* Contact Form Section */}
            <div className="w-full md:w-1/2 p-6">
                <form className="max-w-md mx-auto space-y-4">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium mb-1">Navn</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            className="w-full px-3 py-2 border rounded-md"
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-1">Epost</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="w-full px-3 py-2 border rounded-md"
                        />
                    </div>
                    <div>
                        <label htmlFor="message" className="block text-sm font-medium mb-1">Melding</label>
                        <textarea
                            id="message"
                            name="message"
                            rows={4}
                            className="w-full px-3 py-2 border rounded-md"
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
                    >
                        Send
                    </button>
                </form>
            </div>
            {/* Map Section */}
            <div className="w-full md:w-1/2 h-[400px] md:h-auto">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1763.7808967171836!2d11.35621657718628!3d63.763939348509815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x466d650098ebc66d%3A0xa8c4c248999d9791!2sVinstua!5e0!3m2!1sno!2sno!4v1737302770784!5m2!1sno!2sno"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
        </div>
    );
}
  