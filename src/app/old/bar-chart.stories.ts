import type { Meta, StoryObj } from '@storybook/angular';
import { BarChartComponent, BarChartData } from './bar-chart.component';

// Données d'exemple
const defaultData: BarChartData[] = [
  { label: 'Janvier', value: 30 },
  { label: 'Février', value: 45 },
  { label: 'Mars', value: 60 },
  { label: 'Avril', value: 35 },
  { label: 'Mai', value: 75 },
  { label: 'Juin', value: 55 }
];

const salesData: BarChartData[] = [
  { label: 'Produit A', value: 120 },
  { label: 'Produit B', value: 90 },
  { label: 'Produit C', value: 150 },
  { label: 'Produit D', value: 80 },
  { label: 'Produit E', value: 200 }
];

const emptyData: BarChartData[] = [];

const singleItemData: BarChartData[] = [
  { label: 'Unique', value: 100 }
];

const largeDataset: BarChartData[] = Array.from({ length: 20 }, (_, i) => ({
  label: `Item ${i + 1}`,
  value: Math.floor(Math.random() * 100) + 10
}));

const meta: Meta<BarChartComponent> = {
  title: 'Visualisation Types/BarChart',
  component: BarChartComponent,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Un composant de graphique en barres utilisant D3.js pour visualiser des données numériques.'
      }
    }
  },
  argTypes: {
    data: {
      description: 'Les données à afficher dans le graphique',
      control: { type: 'object' }
    },
    width: {
      description: 'Largeur du graphique en pixels',
      control: { type: 'number', min: 200, max: 1000, step: 50 }
    },
    height: {
      description: 'Hauteur du graphique en pixels',
      control: { type: 'number', min: 200, max: 800, step: 50 }
    },
    color: {
      description: 'Couleur des barres',
      control: { type: 'color' }
    },
    margin: {
      description: 'Marges du graphique',
      control: { type: 'object' }
    }
  },
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<BarChartComponent>;

// Story par défaut
export const Default: Story = {
  args: {
    data: defaultData,
    width: 600,
    height: 400,
    color: '#69b3a2',
    margin: { top: 20, right: 30, bottom: 40, left: 40 }
  }
};

// Story avec des données de ventes
export const SalesData: Story = {
  args: {
    data: salesData,
    width: 700,
    height: 450,
    color: '#2563eb',
    margin: { top: 20, right: 30, bottom: 50, left: 60 }
  },
  parameters: {
    docs: {
      description: {
        story: 'Graphique représentant les ventes par produit avec une couleur bleue.'
      }
    }
  }
};

// Story avec des couleurs personnalisées
export const CustomColors: Story = {
  args: {
    data: defaultData,
    width: 600,
    height: 400,
    color: '#dc2626',
    margin: { top: 20, right: 30, bottom: 40, left: 40 }
  },
  parameters: {
    docs: {
      description: {
        story: 'Même graphique avec une couleur rouge personnalisée.'
      }
    }
  }
};

// Story avec des dimensions personnalisées
export const SmallSize: Story = {
  args: {
    data: defaultData.slice(0, 4), // Moins de données pour un petit graphique
    width: 400,
    height: 250,
    color: '#059669',
    margin: { top: 10, right: 20, bottom: 30, left: 30 }
  },
  parameters: {
    docs: {
      description: {
        story: 'Version plus petite du graphique avec moins de données.'
      }
    }
  }
};

// Story avec beaucoup de données
export const LargeDataset: Story = {
  args: {
    data: largeDataset,
    width: 900,
    height: 500,
    color: '#7c3aed',
    margin: { top: 20, right: 30, bottom: 60, left: 50 }
  },
  parameters: {
    docs: {
      description: {
        story: 'Graphique avec un grand nombre de données pour tester la performance et l\'affichage.'
      }
    }
  }
};

// Story avec un seul élément
export const SingleItem: Story = {
  args: {
    data: singleItemData,
    width: 400,
    height: 300,
    color: '#f59e0b',
    margin: { top: 20, right: 30, bottom: 40, left: 40 }
  },
  parameters: {
    docs: {
      description: {
        story: 'Graphique avec une seule barre de données.'
      }
    }
  }
};

// Story avec données vides
export const EmptyData: Story = {
  args: {
    data: emptyData,
    width: 600,
    height: 400,
    color: '#6b7280',
    margin: { top: 20, right: 30, bottom: 40, left: 40 }
  },
  parameters: {
    docs: {
      description: {
        story: 'Graphique sans données pour tester le comportement avec un dataset vide.'
      }
    }
  }
};

// Story interactive avec contrôles
export const Playground: Story = {
  args: {
    data: defaultData,
    width: 600,
    height: 400,
    color: '#69b3a2',
    margin: { top: 20, right: 30, bottom: 40, left: 40 }
  },
  parameters: {
    docs: {
      description: {
        story: 'Story interactive permettant de modifier toutes les propriétés du composant.'
      }
    }
  }
};