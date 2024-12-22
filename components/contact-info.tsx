import { Github, Linkedin, Mail } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function ContactInfo() {
  return (
    <section id="contact-info" className="py-16 bg-muted">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Connect with Me</h2>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <Button variant="outline" asChild>
            <a href="https://www.linkedin.com/in/tariq-hussain-chandio-6498442ba?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
              <Linkedin size={20} />
              LinkedIn
            </a>
          </Button>
          <Button variant="outline" asChild>
            <a href="https://github.com/TariqHussainChandio" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
              <Github size={20} />
              GitHub
            </a>
          </Button>
          <Button variant="outline" asChild>
            <a href="mailto:tariqhussainchandio1357@gmail.com" className="flex items-center gap-2">
              <Mail size={20} />
              Email
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}

