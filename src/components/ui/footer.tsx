const Footer = () => {
  return (
    <footer className="bg-accent px-8 py-4 text-[0.625rem] opacity-75 lg:py-10 lg:text-sm">
      <div className="mx-auto lg:container">
        <div className="hidden grid-cols-4 gap-8 lg:grid">
          <div className="flex flex-col gap-4">
            <h1 className="text-lg font-bold uppercase">fsw store</h1>
            <p className="text-sm opacity-60">
              Sua loja de tecnologia e periféricos com os melhores preços do
              mercado.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h1 className="text-sm font-bold uppercase">Categorias</h1>
            <ul className="flex flex-col gap-2 text-xs">
              <li>Mouses</li>
              <li>Teclados</li>
              <li>Monitores</li>
              <li>Headsets</li>
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <h1 className="text-sm font-bold uppercase">Ajuda</h1>
            <ul className="flex flex-col gap-2 text-xs">
              <li>Envios e Entregas</li>
              <li>Trocas e Devoluções</li>
              <li>Políticas de Privacidade</li>
              <li>FAQ</li>
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <h1 className="text-sm font-bold uppercase">Pagamento</h1>
            <div className="flex flex-wrap gap-2 opacity-60">
              {/* Payment icons could go here */}
              Visa, Mastercard, Pix, Boleto
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-white/5 pt-4 text-center lg:mt-16 lg:text-left">
          © {new Date().getFullYear()} Copyright{" "}
          <span className="font-semibold">FSW Store</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
