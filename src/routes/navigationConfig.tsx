import { ChatBubble, ChromeReaderMode, Dashboard } from '@material-ui/icons';

export default [
  {
    subheader: 'Reports',
    items: [
      {
        title: 'menu_item_dashboard',
        href: '/app/home',
        icon: Dashboard
      },
      {
        title: 'menu_item_presentations',
        href: '/app/presentations',
        icon: ChromeReaderMode,
        children: [
          {
            title: 'menu_item_presentations_faq_categories',
            href: '/app/presentations/faq-categories',
            icon: ChatBubble
          }
        ]
      }
    ]
  }
];
