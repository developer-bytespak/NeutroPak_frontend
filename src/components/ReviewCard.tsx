import React from 'react';

interface ReviewCardProps {
  author: string;
  rating?: number;
  text: string;
  date?: string;
}

const ReviewCard: React.FC<ReviewCardProps> = ({
  author,
  rating = 5,
  text,
  date,
}) => {
  return (
    <div className="card p-6 bg-gradient-to-br from-gold-50 to-white">
      <div className="flex items-start justify-between mb-3">
        <h4 className="font-bold text-gray-900">{author}</h4>
        <span className="text-gold-400 text-lg">
          {'★'.repeat(rating)}
        </span>
      </div>
      <p className="text-gray-700 leading-relaxed mb-4 italic">
        "{text}"
      </p>
      {date && <p className="text-gray-500 text-sm">{date}</p>}
    </div>
  );
};

export default ReviewCard;
