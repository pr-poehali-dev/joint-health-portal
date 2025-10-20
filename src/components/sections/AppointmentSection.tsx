import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';

const AppointmentSection = () => {
  const { toast } = useToast();

  const handleAppointmentSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast({
      title: "Заявка отправлена",
      description: "Мы свяжемся с вами в ближайшее время для подтверждения записи.",
    });
  };

  return (
    <section id="appointment" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge className="mb-4">Запись на приём</Badge>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Записаться на консультацию</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Заполните форму, и мы свяжемся с вами для подтверждения записи
          </p>
        </div>
        <div className="max-w-2xl mx-auto">
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
  );
};

export default AppointmentSection;
