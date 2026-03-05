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
    <div className="card p-4 sm:p-6 bg-gradient-to-br from-gold-50 to-white h-full">
      <div className="flex items-start justify-between mb-2 sm:mb-3 gap-2">
        <h4 className="font-bold text-sm sm:text-base text-gray-900 line-clamp-1">{author}</h4>
        <span className="text-gold-400 text-sm sm:text-lg whitespace-nowrap flex-shrink-0">
          {'★'.repeat(rating)}
        </span>
      </div>
      <p className="text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed mb-3 sm:mb-4 italic">
        "{text}"
      </p>
      {date && <p className="text-gray-500 text-xs sm:text-sm">{date}</p>}
    </div>
  );
};

export default ReviewCard;
