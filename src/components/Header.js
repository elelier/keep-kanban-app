import React from 'react';
import { Search, RefreshCw, Grid, List, Settings } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';

const Header = ({ onViewChange, currentView }) => {
  return (
    <header className="bg-[rgba(32,33,36,1)] text-white h-12 flex items-center px-4">
      <div className="flex items-center flex-1 min-w-[232px]">
        <h1 className="text-lg font-roboto">Keep-Kanban</h1>
      </div>
      
      <div className="flex items-center justify-end flex-1">
        <div className="relative mr-4">
          <Input
            type="text"
            placeholder="Buscar"
            className="pl-10 pr-4 py-2 bg-[rgba(241,243,244,0.24)] text-white placeholder-gray-300 rounded-lg"
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-300" size={20} />
        </div>
        
        <Button variant="ghost" size="icon" className="mr-2">
          <RefreshCw className="h-5 w-5" />
        </Button>
        
        <div className="mr-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => onViewChange('grid')}
            className={currentView === 'grid' ? 'bg-[rgba(241,243,244,0.24)]' : ''}
          >
            <Grid className="h-5 w-5" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => onViewChange('list')}
            className={currentView === 'list' ? 'bg-[rgba(241,243,244,0.24)]' : ''}
          >
            <List className="h-5 w-5" />
          </Button>
        </div>
        
        <Button variant="ghost" size="icon">
          <Settings className="h-5 w-5" />
        </Button>
      </div>
    </header>
  );
};

export default Header;