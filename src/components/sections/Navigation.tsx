import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface NavigationProps {
  activeSection: string;
  scrollToSection: (id: string) => void;
}

const Navigation = ({ activeSection, scrollToSection }: NavigationProps) => {
  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Icon name="Heart" className="text-primary" size={32} />
            <span className="text-2xl font-bold text-primary">СуставКлиник</span>
          </div>
          <div className="hidden md:flex space-x-6">
            {[
              { id: 'home', label: 'Главная' },
              { id: 'services', label: 'Услуги' },
              { id: 'specialists', label: 'Специалисты' },
              { id: 'diagnostics', label: 'Диагностика' },
              { id: 'diseases', label: 'Заболевания' },
              { id: 'blog', label: 'Блог' },
              { id: 'reviews', label: 'Отзывы' },
              { id: 'contact', label: 'Контакты' }
            ].map(item => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  activeSection === item.id ? 'text-primary' : 'text-gray-600'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
          <Button onClick={() => scrollToSection('appointment')} className="hidden md:block">
            Записаться
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
