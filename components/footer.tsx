export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground text-center md:text-left">
            © {currentYear} Portfolio DevOps. Tous droits réservés.
          </p>
          <p className="text-sm text-muted-foreground text-center md:text-right">
            Conçu avec passion et expertise technique
          </p>
        </div>
      </div>
    </footer>
  )
}
