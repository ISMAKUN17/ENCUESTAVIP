
import React, { useState } from 'react';
import { Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { useLanguage } from '@/context/LanguageContext';

type UserInfoFormProps = {
  open: boolean;
  onClose: () => void;
  onSubmit: (userInfo: UserInfo) => void;
};

export type UserInfo = {
  date: string;
  roomNumber: string;
  name: string;
  butler: string;
};

const UserInfoForm = ({ open, onClose, onSubmit }: UserInfoFormProps) => {
  const { t } = useLanguage();
  const [userInfo, setUserInfo] = useState<UserInfo>({
    date: new Date().toISOString().split('T')[0], // Default to today
    roomNumber: '',
    name: '',
    butler: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserInfo(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(userInfo);
  };

  const isFormValid = userInfo.roomNumber && userInfo.name && userInfo.butler;

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md animate-fade-in">
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold mb-2">{t('user_info')}</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 py-2">
          <div className="grid gap-2">
            <Label htmlFor="date" className="text-sm font-medium">
              {t('date')}
            </Label>
            <div className="relative">
              <Input
                id="date"
                name="date"
                type="date"
                value={userInfo.date}
                onChange={handleChange}
                className="pl-9"
                required
              />
              <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            </div>
          </div>
          
          <div className="grid gap-2">
            <Label htmlFor="roomNumber" className="text-sm font-medium">
              {t('room_number')}
            </Label>
            <Input
              id="roomNumber"
              name="roomNumber"
              type="text"
              value={userInfo.roomNumber}
              onChange={handleChange}
              placeholder={t('room_number_placeholder')}
              required
            />
          </div>
          
          <div className="grid gap-2">
            <Label htmlFor="name" className="text-sm font-medium">
              {t('name')}
            </Label>
            <Input
              id="name"
              name="name"
              type="text"
              value={userInfo.name}
              onChange={handleChange}
              placeholder={t('name_placeholder')}
              required
            />
          </div>
          
          <div className="grid gap-2">
            <Label htmlFor="butler" className="text-sm font-medium">
              {t('butler')}
            </Label>
            <Input
              id="butler"
              name="butler"
              type="text"
              value={userInfo.butler}
              onChange={handleChange}
              placeholder={t('butler_placeholder')}
              required
            />
          </div>
          
          <DialogFooter className="pt-4">
            <Button variant="outline" type="button" onClick={onClose}>
              {t('cancel')}
            </Button>
            <Button type="submit" disabled={!isFormValid}>
              {t('confirm')}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default UserInfoForm;
