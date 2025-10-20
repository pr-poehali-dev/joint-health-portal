import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');
  const { toast } = useToast();

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleAppointmentSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast({
      title: "Заявка отправлена",
      description: "Мы свяжемся с вами в ближайшее время для подтверждения записи.",
    });
  };

  const services = [
    {
      icon: 'Stethoscope',
      title: 'Консультация ортопеда',
      description: 'Комплексный осмотр и диагностика заболеваний суставов'
    },
    {
      icon: 'Activity',
      title: 'Артроскопия',
      description: 'Малоинвазивное хирургическое лечение суставов'
    },
    {
      icon: 'Zap',
      title: 'Физиотерапия',
      description: 'Современные методы восстановления и реабилитации'
    },
    {
      icon: 'Heart',
      title: 'PRP-терапия',
      description: 'Лечение суставов обогащенной тромбоцитами плазмой'
    },
    {
      icon: 'FileText',
      title: 'УЗИ суставов',
      description: 'Точная диагностика состояния суставов и мягких тканей'
    },
    {
      icon: 'Shield',
      title: 'Протезирование',
      description: 'Замена поврежденных суставов на искусственные'
    }
  ];

  const specialists = [
    {
      name: 'Иванов Сергей Петрович',
      position: 'Врач-ортопед, травматолог',
      experience: '15 лет опыта',
      specialization: 'Артроскопия, эндопротезирование'
    },
    {
      name: 'Смирнова Елена Викторовна',
      position: 'Врач-ревматолог',
      experience: '12 лет опыта',
      specialization: 'Лечение артритов и артрозов'
    },
    {
      name: 'Петров Дмитрий Александрович',
      position: 'Врач-физиотерапевт',
      experience: '10 лет опыта',
      specialization: 'Реабилитация после операций'
    }
  ];

  const diagnostics = [
    { name: 'Рентгенография', time: '15 минут', description: 'Базовое исследование структуры костей и суставов' },
    { name: 'МРТ суставов', time: '30-40 минут', description: 'Детальная визуализация мягких тканей, хрящей и связок' },
    { name: 'КТ', time: '20 минут', description: 'Трехмерное изображение костных структур' },
    { name: 'УЗИ', time: '20 минут', description: 'Оценка состояния мягких тканей вокруг сустава' },
    { name: 'Артроскопия', time: '1-2 часа', description: 'Визуальный осмотр сустава изнутри' }
  ];

  const diseases = [
    {
      name: 'Артроз',
      description: 'Дегенеративное заболевание суставного хряща',
      symptoms: ['Боль при движении', 'Скованность по утрам', 'Хруст в суставах']
    },
    {
      name: 'Артрит',
      description: 'Воспалительное заболевание суставов',
      symptoms: ['Припухлость', 'Покраснение кожи', 'Повышение температуры']
    },
    {
      name: 'Бурсит',
      description: 'Воспаление суставной сумки',
      symptoms: ['Локальная боль', 'Отёк', 'Ограничение движений']
    },
    {
      name: 'Тендинит',
      description: 'Воспаление сухожилий',
      symptoms: ['Боль при нагрузке', 'Припухлость', 'Слабость мышц']
    }
  ];

  const reviews = [
    {
      name: 'Мария К.',
      text: 'Огромная благодарность доктору Иванову! После артроскопии колена вернулась к активной жизни. Профессионализм на высшем уровне!',
      rating: 5,
      date: '2 недели назад'
    },
    {
      name: 'Александр П.',
      text: 'Прошёл курс PRP-терапии для лечения артроза. Результат превзошёл ожидания. Боли практически ушли!',
      rating: 5,
      date: '1 месяц назад'
    },
    {
      name: 'Ольга В.',
      text: 'Очень внимательное отношение, качественная диагностика. Рекомендую всем, кто столкнулся с проблемами суставов.',
      rating: 5,
      date: '3 недели назад'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
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

      {/* Hero Section */}
      <section id="home" className="relative bg-gradient-to-br from-blue-50 via-white to-green-50 py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge className="bg-secondary text-white">Современная медицина</Badge>
              <h1 className="text-5xl font-bold text-gray-900 leading-tight">
                Здоровье ваших суставов — наша забота
              </h1>
              <p className="text-xl text-gray-600">
                Профессиональная диагностика, лечение и реабилитация заболеваний суставов с применением современных технологий
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" onClick={() => scrollToSection('appointment')} className="text-lg px-8">
                  Записаться на приём
                </Button>
                <Button size="lg" variant="outline" onClick={() => scrollToSection('services')} className="text-lg px-8">
                  Наши услуги
                </Button>
              </div>
              <div className="flex items-center space-x-8 pt-4">
                <div>
                  <div className="text-3xl font-bold text-primary">15+</div>
                  <div className="text-sm text-gray-600">лет опыта</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">5000+</div>
                  <div className="text-sm text-gray-600">пациентов</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">98%</div>
                  <div className="text-sm text-gray-600">положительных отзывов</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://cdn.poehali.dev/projects/78d1c7d0-fad4-479e-b15b-8c4122c87bd4/files/bf406fa6-4126-4fa7-b30f-717cdf7c73b0.jpg" 
                alt="Анатомия сустава" 
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4">Наши услуги</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Комплексное лечение суставов</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Мы предлагаем полный спектр услуг от диагностики до реабилитации
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300 border-2 hover:border-primary">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon name={service.icon} className="text-primary" size={24} />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Specialists Section */}
      <section id="specialists" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-secondary">Наша команда</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Опытные специалисты</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Врачи высшей категории с многолетним опытом работы
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {specialists.map((specialist, index) => (
              <Card key={index} className="text-center hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <div className="w-24 h-24 bg-gradient-to-br from-primary to-secondary rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Icon name="User" className="text-white" size={48} />
                  </div>
                  <CardTitle className="text-xl mb-2">{specialist.name}</CardTitle>
                  <CardDescription className="text-base">
                    <div className="font-semibold text-gray-700 mb-1">{specialist.position}</div>
                    <div className="text-sm text-gray-500 mb-2">{specialist.experience}</div>
                    <Badge variant="outline" className="mt-2">{specialist.specialization}</Badge>
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Diagnostics Section */}
      <section id="diagnostics" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4">Диагностика</Badge>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Современное оборудование</h2>
              <p className="text-lg text-gray-600 mb-8">
                Точная диагностика — основа успешного лечения. Мы используем новейшее оборудование для выявления заболеваний суставов на ранних стадиях.
              </p>
              <div className="space-y-4">
                {diagnostics.map((diagnostic, index) => (
                  <div key={index} className="flex items-start space-x-4 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Icon name="CheckCircle" className="text-primary" size={20} />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">{diagnostic.name}</div>
                      <div className="text-sm text-gray-500">{diagnostic.time}</div>
                      <div className="text-sm text-gray-600 mt-1">{diagnostic.description}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <img 
                src="https://cdn.poehali.dev/projects/78d1c7d0-fad4-479e-b15b-8c4122c87bd4/files/cfa5d3e2-21f8-4ecc-b0ae-aa804c42cb04.jpg" 
                alt="Диагностическое оборудование" 
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Diseases Section */}
      <section id="diseases" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-secondary">Заболевания</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Что мы лечим</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Специализируемся на лечении широкого спектра заболеваний суставов
            </p>
          </div>
          <Accordion type="single" collapsible className="max-w-3xl mx-auto">
            {diseases.map((disease, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-lg font-semibold">
                  <div className="flex items-center space-x-3">
                    <Icon name="AlertCircle" className="text-primary" size={24} />
                    <span>{disease.name}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <p className="text-gray-700 mb-4">{disease.description}</p>
                    <div className="font-semibold mb-2">Основные симптомы:</div>
                    <ul className="space-y-2">
                      {disease.symptoms.map((symptom, i) => (
                        <li key={i} className="flex items-start space-x-2">
                          <Icon name="Check" className="text-secondary mt-1 flex-shrink-0" size={16} />
                          <span className="text-gray-600">{symptom}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4">Отзывы пациентов</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Что говорят наши пациенты</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between mb-3">
                    <CardTitle className="text-lg">{review.name}</CardTitle>
                    <div className="flex">
                      {[...Array(review.rating)].map((_, i) => (
                        <Icon key={i} name="Star" className="text-yellow-400 fill-yellow-400" size={16} />
                      ))}
                    </div>
                  </div>
                  <CardDescription className="text-base text-gray-700 leading-relaxed">
                    "{review.text}"
                  </CardDescription>
                  <div className="text-sm text-gray-500 mt-3">{review.date}</div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Appointment Section */}
      <section id="appointment" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-secondary">Запись на приём</Badge>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Запишитесь на консультацию</h2>
              <p className="text-xl text-gray-600">
                Заполните форму, и мы свяжемся с вами для подтверждения записи
              </p>
            </div>
            <Card className="shadow-xl">
              <CardContent className="p-8">
                <form onSubmit={handleAppointmentSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Ваше имя</label>
                    <Input placeholder="Иван Иванов" required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Телефон</label>
                    <Input type="tel" placeholder="+7 (999) 123-45-67" required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <Input type="email" placeholder="example@mail.ru" required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Услуга</label>
                    <select className="w-full border border-gray-300 rounded-md p-2">
                      <option>Консультация ортопеда</option>
                      <option>Артроскопия</option>
                      <option>Физиотерапия</option>
                      <option>PRP-терапия</option>
                      <option>УЗИ суставов</option>
                      <option>Другое</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Комментарий</label>
                    <Textarea placeholder="Опишите вашу проблему..." rows={4} />
                  </div>
                  <Button type="submit" className="w-full text-lg py-6">
                    Отправить заявку
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4">Контакты</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Как нас найти</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Icon name="MapPin" className="text-primary" size={32} />
                </div>
                <CardTitle className="text-lg mb-2">Адрес</CardTitle>
                <CardDescription className="text-base">
                  г. Москва, ул. Медицинская, д. 15
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-secondary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Icon name="Phone" className="text-secondary" size={32} />
                </div>
                <CardTitle className="text-lg mb-2">Телефон</CardTitle>
                <CardDescription className="text-base">
                  +7 (495) 123-45-67<br />
                  +7 (499) 987-65-43
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Icon name="Clock" className="text-primary" size={32} />
                </div>
                <CardTitle className="text-lg mb-2">Режим работы</CardTitle>
                <CardDescription className="text-base">
                  Пн-Пт: 8:00 - 20:00<br />
                  Сб-Вс: 9:00 - 18:00
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
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
    </div>
  );
};

export default Index;
