import { contactInfo } from '../../data';

export default function WhatsAppFloatButton() {
  const url = `https://wa.me/${contactInfo.whatsapp.replace('+', '')}?text=Hello%20Gamay%20Group%2C%20I%20would%20like%20to%20enquire%20about%20your%20services.`;

  return (
    <a href={url} target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 shadow-2xl flex items-center justify-center transition-all hover:scale-110 group">
      {/* WhatsApp SVG */}
      <svg viewBox="0 0 32 32" className="w-7 h-7 fill-white" xmlns="http://www.w3.org/2000/svg">
        <path d="M16.003 3.2A12.785 12.785 0 0 0 3.2 15.986c0 2.256.59 4.459 1.71 6.39L3.2 28.8l6.57-1.685a12.78 12.78 0 0 0 6.233 1.59h.006A12.785 12.785 0 0 0 28.8 15.92 12.785 12.785 0 0 0 16.003 3.2zm0 23.372a10.603 10.603 0 0 1-5.393-1.474l-.387-.229-4.008 1.027 1.054-3.852-.253-.4a10.57 10.57 0 0 1-1.623-5.658A10.61 10.61 0 0 1 16.003 6.402a10.61 10.61 0 0 1 10.594 10.594 10.61 10.61 0 0 1-10.594 10.576zm5.806-7.934c-.317-.159-1.877-.926-2.168-1.031-.291-.106-.503-.159-.714.159-.212.317-.82 1.031-.1.006 1.245-.212.318-.664.159-.98-.158-.318-1.484-1.86-2.038-2.51-.53-.62-1.08-.53-1.48-.54-.385-.01-.661-.013-.937-.013-.317 0-.82.119-1.245.582-.424.463-1.62 1.59-1.62 3.872 0 2.282 1.66 4.487 1.891 4.8.232.317 3.248 5.079 8.002 6.919 1.12.424 2.005.69 2.69.876 1.13.318 2.16.274 2.974.166.907-.123 2.793-1.1 3.19-2.167.396-1.064.396-1.978.278-2.168-.116-.185-.422-.291-.739-.45z"/>
      </svg>
      <span className="absolute right-16 bg-gray-900 text-white text-xs font-body font-600 px-3 py-1.5 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
        Chat with us
      </span>
    </a>
  );
}
