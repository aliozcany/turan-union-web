import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const Admin = () => {
  const { t } = useLanguage();
  const [newsForm, setNewsForm] = useState({
    title: '',
    description: '',
    content: '',
    image: ''
  });
  
  const [projectForm, setProjectForm] = useState({
    title: '',
    description: '',
    status: '',
    image: ''
  });

  const handleNewsSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Sadece görsel - backend bağlantısı user tarafından yapılacak
    console.log('News data:', newsForm);
    alert('Haber eklendi! (Sadece görsel demo)');
    setNewsForm({ title: '', description: '', content: '', image: '' });
  };

  const handleProjectSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Sadece görsel - backend bağlantısı user tarafından yapılacak
    console.log('Project data:', projectForm);
    alert('Proje eklendi! (Sadece görsel demo)');
    setProjectForm({ title: '', description: '', status: '', image: '' });
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-8 pb-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-center mb-12 text-turan-teal">
            {t('adminPanel')}
          </h1>
          
          <Tabs defaultValue="news" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="news">{t('newsManagement')}</TabsTrigger>
              <TabsTrigger value="projects">{t('projectManagement')}</TabsTrigger>
            </TabsList>
            
            <TabsContent value="news" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-turan-teal">{t('addNews')}</CardTitle>
                  <CardDescription>
                    {t('language') === 'tr' ? 'Yeni haber ekleyin' : 'Add new news article'}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleNewsSubmit} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="news-title">{t('title')}</Label>
                      <Input
                        id="news-title"
                        placeholder={t('titlePlaceholder')}
                        value={newsForm.title}
                        onChange={(e) => setNewsForm({...newsForm, title: e.target.value})}
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="news-description">{t('description')}</Label>
                      <Textarea
                        id="news-description"
                        placeholder={t('descriptionPlaceholder')}
                        value={newsForm.description}
                        onChange={(e) => setNewsForm({...newsForm, description: e.target.value})}
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="news-content">{t('content')}</Label>
                      <Textarea
                        id="news-content"
                        placeholder={t('contentPlaceholder')}
                        value={newsForm.content}
                        onChange={(e) => setNewsForm({...newsForm, content: e.target.value})}
                        className="min-h-[120px]"
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="news-image">{t('image')}</Label>
                      <Input
                        id="news-image"
                        placeholder={t('imagePlaceholder')}
                        value={newsForm.image}
                        onChange={(e) => setNewsForm({...newsForm, image: e.target.value})}
                      />
                    </div>
                    
                    <div className="flex gap-2">
                      <Button type="submit" className="bg-turan-teal hover:bg-turan-teal/90">
                        {t('save')}
                      </Button>
                      <Button 
                        type="button" 
                        variant="outline"
                        onClick={() => setNewsForm({ title: '', description: '', content: '', image: '' })}
                      >
                        {t('cancel')}
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="projects" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-turan-teal">{t('addProject')}</CardTitle>
                  <CardDescription>
                    {t('language') === 'tr' ? 'Yeni proje ekleyin' : 'Add new project'}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleProjectSubmit} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="project-title">{t('title')}</Label>
                      <Input
                        id="project-title"
                        placeholder={t('titlePlaceholder')}
                        value={projectForm.title}
                        onChange={(e) => setProjectForm({...projectForm, title: e.target.value})}
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="project-description">{t('description')}</Label>
                      <Textarea
                        id="project-description"
                        placeholder={t('descriptionPlaceholder')}
                        value={projectForm.description}
                        onChange={(e) => setProjectForm({...projectForm, description: e.target.value})}
                        className="min-h-[120px]"
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="project-status">{t('status')}</Label>
                      <Select value={projectForm.status} onValueChange={(value) => setProjectForm({...projectForm, status: value})}>
                        <SelectTrigger>
                          <SelectValue placeholder={t('selectStatus')} />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="ongoing">{t('ongoing')}</SelectItem>
                          <SelectItem value="completed">{t('completed')}</SelectItem>
                          <SelectItem value="planning">{t('planning')}</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="project-image">{t('image')}</Label>
                      <Input
                        id="project-image"
                        placeholder={t('imagePlaceholder')}
                        value={projectForm.image}
                        onChange={(e) => setProjectForm({...projectForm, image: e.target.value})}
                      />
                    </div>
                    
                    <div className="flex gap-2">
                      <Button type="submit" className="bg-turan-teal hover:bg-turan-teal/90">
                        {t('save')}
                      </Button>
                      <Button 
                        type="button" 
                        variant="outline"
                        onClick={() => setProjectForm({ title: '', description: '', status: '', image: '' })}
                      >
                        {t('cancel')}
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Admin;