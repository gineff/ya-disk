import React, { useEffect, useState } from 'react';
import { FileMenu } from '../ui/file-menu';

export const useFileMenu = ({
  containerRef,
  className,
}: {
  containerRef: React.RefObject<HTMLDivElement>;
  className: string;
}) => {
  const [menuAnchor, setMenuAnchor] = useState<HTMLElement | null>(null);

  const handleMenuClick = (fileItem: HTMLElement) => {
    setMenuAnchor(fileItem);
  };

  const handleMenuClose = () => {
    setMenuAnchor(null);
  };

  useEffect(() => {
    //menu привязывается к контейнеру, а не к каждому элементу отделено
    const handleContainerClick = (event: MouseEvent) => {
      event.stopPropagation();
      const targetElement = event.target as HTMLElement;
      const fileItem = targetElement.closest(`.${className}`) as HTMLElement;
      //console.log(fileItem, targetElement);
      if (fileItem) {
        handleMenuClick(fileItem);
      }
    };

    containerRef.current?.addEventListener('click', handleContainerClick);

    return () => {
      containerRef.current?.removeEventListener('click', handleContainerClick);
    };
  }, [containerRef]);

  return {
    FileMenu: () => (
      <FileMenu menuAnchor={menuAnchor} handleClose={handleMenuClose}/>
    ),
  };
};
