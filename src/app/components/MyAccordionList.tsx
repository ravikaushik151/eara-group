'use client';

interface Item {
  id: number;
  title: string;
  content: string;
}

interface LocationGridProps {
  items: Item[];
}

export default function LocationGrid({ items }: LocationGridProps) {
  return (
    <div className="container-fluid py-4">
      {/* 'row-cols-lg-5' creates 5 columns like your image.
        'g-2' provides the small gaps between cards.
      */}
      <div className="row g-2 row-cols-1 row-cols-md-3 row-cols-lg-5 align-items-stretch">
        {items.map((item) => (
          <div className="col d-flex" key={item.id}>
            <div 
              className="d-flex flex-column w-100" 
              style={{ border: 'none' }}
            >
              {/* Header: Fixed Black Background */}
              <div 
                className="p-3 text-white fw-bold d-flex align-items-center" 
                style={{ 
                  backgroundColor: '#111', 
                  fontSize: '0.8rem',
                  minHeight: '70px', // Ensures headers stay aligned
                  textTransform: 'uppercase'
                }}
              >
                {item.title}
              </div>

              {/* Body: Uniform Light Grey Background & Matching Height */}
              <div 
                className="p-3 flex-grow-1" 
                style={{ 
                  backgroundColor: '#f1f1f1', // Same background for all
                  fontSize: '0.9rem'
                }}
              >
                <style dangerouslySetInnerHTML={{ __html: `
                  .location-list ul { 
                    list-style: none; 
                    padding: 0; 
                    margin: 0; 
                  }
                  .location-list li { 
                    margin-bottom: 10px; 
                    color: #333;
                    line-height: 1.4;
                  }
                `}} />
                
                <div 
                  className="location-list"
                  dangerouslySetInnerHTML={{ __html: item.content }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}