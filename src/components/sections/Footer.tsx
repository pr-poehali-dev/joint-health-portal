import Icon from '@/components/ui/icon';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Icon name="Heart" className="text-primary" size={28} />
              <span className="text-xl font-bold">СуставКлиник</span>
            </div>
            <p className="text-gray-400 text-sm">
              Профессиональное лечение суставов с заботой о каждом пациенте
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Услуги</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Консультация</li>
              <li>Диагностика</li>
              <li>Лечение</li>
              <li>Реабилитация</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Информация</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>О клинике</li>
              <li>Специалисты</li>
              <li>Цены</li>
              <li>Отзывы</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Контакты</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>г. Москва, ул. Медицинская, 15</li>
              <li>+7 (495) 123-45-67</li>
              <li>info@sustavklinik.ru</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          © 2024 СуставКлиник. Все права защищены.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
