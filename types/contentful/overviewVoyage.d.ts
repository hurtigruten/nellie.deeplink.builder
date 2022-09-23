declare namespace Contentful.Voyage {
  type ShipRaw = Entry<{ name: string; code: string }>;
  type OverviewRaw = {
    id: string;
    slug: string;
    name: string;
    bookingCode: string[];
    ships: ShipRaw[];
    availability: Entry<{
      availabilityData: {
        voyages: [
          {
            date: string;
            price: number;
            packageCode: string;
            strikethroughPrice: number;
            cabinsWithPromotions: any[];
          }
        ];
        duration: number;
      };
    }>;
    highlightedImage: Entry<{
      image: Entry<{
        file: {
          url: string;
        };
        title: string;
      }>;
    }>;
  };

  type Overview = {
    id: string;
    slug: string;
    name: string;
    imageUrl: string;
    imageAlt: string;
    departures: string[];
    packageCodes: string[];
    shipCodes: string[];
  };
}
