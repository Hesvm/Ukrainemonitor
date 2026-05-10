export interface BrandIcon {
  name: string;
  label: string;
  category: string;
}

export const BRAND_ICONS: BrandIcon[] = [
  { name: 'Eye',           label: 'Eye',         category: 'Monitoring' },
  { name: 'Radar',         label: 'Radar',        category: 'Monitoring' },
  { name: 'Scan',          label: 'Scan',         category: 'Monitoring' },
  { name: 'Location',      label: 'Location',     category: 'Monitoring' },
  { name: 'Map1',          label: 'Map',          category: 'Monitoring' },
  { name: 'Shield',        label: 'Shield',       category: 'Security'   },
  { name: 'ShieldTick',    label: 'Shield Tick',  category: 'Security'   },
  { name: 'Warning2',      label: 'Warning',      category: 'Security'   },
  { name: 'Flag',          label: 'Flag',         category: 'Security'   },
  { name: 'Chart',         label: 'Chart',        category: 'Analytics'  },
  { name: 'Activity',      label: 'Activity',     category: 'Analytics'  },
  { name: 'TrendUp',       label: 'Trend Up',     category: 'Analytics'  },
  { name: 'TrendDown',     label: 'Trend Down',   category: 'Analytics'  },
  { name: 'Newspaper',     label: 'Newspaper',    category: 'News'       },
  { name: 'Microphone2',   label: 'Microphone',   category: 'News'       },
  { name: 'Video',         label: 'Video',        category: 'News'       },
  { name: 'Global',        label: 'Global',       category: 'News'       },
  { name: 'Notification',  label: 'Notification', category: 'Comms'      },
  { name: 'Message',       label: 'Message',      category: 'Comms'      },
  { name: 'Send2',         label: 'Send',         category: 'Comms'      },
  { name: 'Clock',         label: 'Clock',        category: 'Time'       },
  { name: 'Timer1',        label: 'Timer',        category: 'Time'       },
  { name: 'SearchNormal1', label: 'Search',       category: 'Interface'  },
  { name: 'Filter',        label: 'Filter',       category: 'Interface'  },
];

export const ICON_CATEGORIES = ['Monitoring', 'Security', 'Analytics', 'News', 'Comms', 'Time', 'Interface'] as const;
