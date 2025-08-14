// src/components/Footer.jsx
const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-300 p-10">
            <div className="container mx-auto px-6 text-center">
                <p className="text-sm">
                    &copy; {new Date().getFullYear()} Beyond Sifat. All rights reserved.
                </p>
                <p className="text-xs mt-1 text-gray-500">
                    Designed & Built with ❤️ by Sifat
                </p>
            </div>
        </footer>
    );
};

export default Footer;
