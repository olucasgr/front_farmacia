export default function Footer() {
    return (
      <footer className="bg-neutral text-dark p-4 mt-8">
        <div className="container mx-auto text-center">
          <p>&copy; {new Date().getFullYear()} Farmácia. Todos os direitos reservados.</p>
          <p className="text-sm">Desenvolvido por <a href="https://github.com/olucasgr/front_farmacia" target="_blank">Lucas Rodrigues</a></p>
        </div>
      </footer>
    );
  }