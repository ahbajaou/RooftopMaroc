import React from 'react';
import { Filter, Search } from 'lucide-react';

export default function FilterBar({ onFilterChange }) {
  return (
    <div className="flex flex-wrap gap-4 mb-8">
      <select 
        className="px-4 py-2 border rounded-lg text-sm hover:bg-gray-50"
        onChange={(e) => onFilterChange('mood', e.target.value)}
      >
        <option value="">Select Mood</option>
        <option value="Romantic">Romantic</option>
        <option value="Party">Party</option>
        <option value="Sunset">Sunset</option>
        <option value="Quiet">Quiet</option>
      </select>

      <select 
        className="px-4 py-2 border rounded-lg text-sm hover:bg-gray-50"
        onChange={(e) => onFilterChange('area', e.target.value)}
      >
        <option value="">Select Area</option>
        <option value="Medina">Medina</option>
        <option value="Gueliz">Gueliz</option>
        <option value="Hivernage">Hivernage</option>
      </select>

      <select 
        className="px-4 py-2 border rounded-lg text-sm hover:bg-gray-50"
        onChange={(e) => onFilterChange('price', e.target.value)}
      >
        <option value="">Price Range</option>
        <option value="$">$</option>
        <option value="$$">$$</option>
        <option value="$$$">$$$</option>
      </select>
    </div>
  );
}