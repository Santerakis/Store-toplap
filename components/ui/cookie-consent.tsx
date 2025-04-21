'use client'

import { useState, useEffect } from 'react'
import { X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { PrivacyModal } from '@/components/ui/privacy-modal'

export function CookieConsent() {
  const [isVisible, setIsVisible] = useState<boolean>(false)
  const [isPrivacyModalOpen, setIsPrivacyModalOpen] = useState<boolean>(false)

  useEffect(() => {
    // Check if user has already given consent
    const consent = localStorage.getItem('cookie-consent')
    if (!consent) {
      setIsVisible(true)
    }
  }, [])

  const acceptCookies = () => {
    localStorage.setItem('cookie-consent', 'accepted')
    setIsVisible(false)
  }

  const declineCookies = () => {
    localStorage.setItem('cookie-consent', 'declined')
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-background border-t shadow-lg">
      <div className="container mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="space-y-2 flex-1">
          <h3 className="text-lg font-medium">Мы используем файлы cookie</h3>
          <p className="text-sm text-muted-foreground">
            Мы используем файлы cookie для улучшения вашего опыта работы с сайтом, 
            персонализации контента и анализа посещаемости.{' '}
            <button
              onClick={() => setIsPrivacyModalOpen(true)}
              className="text-primary underline underline-offset-4 hover:text-primary/90"
            >
              Прочитать политику конфиденциальности
            </button>
          </p>
        </div>
        <div className="flex gap-2 mt-2 md:mt-0">
          <Button onClick={declineCookies} variant="outline" size="sm" className="h-9">
            Отклонить
          </Button>
          <Button onClick={acceptCookies} size="sm" className="h-9">
            Принять все
          </Button>
          <Button 
            variant="ghost" 
            size="icon" 
            className="h-9 w-9" 
            onClick={declineCookies}
          >
            <X className="h-4 w-4" />
            <span className="sr-only">Закрыть</span>
          </Button>
        </div>
      </div>
      
      <PrivacyModal 
        defaultOpen={isPrivacyModalOpen}
        onOpenChange={setIsPrivacyModalOpen} 
      />
    </div>
  )
} 