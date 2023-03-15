import { motion } from 'framer-motion';
import { useState } from 'react';
import Measure from 'react-measure';
import { OnSelectItemProps, TreeBasicType } from '..';
import { Colors } from '../../../colors';
import { Item } from '../item';

interface CollapseProps<T> {
  data: T;
  title?: string;
  children: React.ReactNode;
  level: number;
  backgroundColor: Colors;
  textColor: Colors;
  onLoadData?: (value: OnSelectItemProps<T>) => Promise<void>;
  onClick?: (value: OnSelectItemProps<T>) => void;
  activeItemId?: string;
  id: string;
}

const Collapse = <T extends TreeBasicType<T>>({
  title,
  children,
  level,
  backgroundColor,
  textColor,
  data,
  onLoadData,
  onClick,
  activeItemId,
  id,
}: CollapseProps<T>) => {
  const [isOpen, setOpen] = useState(false);
  const [isLoading, setLoading] = useState<boolean>(false);

  const handleOnClick = () => {
    setLoading(true);
    onClick?.({ data, level });
    onLoadData?.({ data, level }).finally(() => {
      setLoading(false);
      if (!children) {
        setOpen(true);
      }
    });
    if (children) {
      setOpen((prev) => !prev);
    }
  };

  return (
    <>
      <Item
        isActive={id === activeItemId}
        isLoading={isLoading}
        textColor={textColor}
        backgroundColor={backgroundColor}
        level={level}
        title={title}
        onClick={handleOnClick}
        arrowDirection={children ? (isOpen ? 'up' : 'down') : undefined}
      />

      {children ? (
        <Measure bounds>
          {({ contentRect, measureRef }) => {
            const height = contentRect.bounds?.height ?? 0;
            return (
              <motion.div
                style={{ position: 'relative', marginBlockEnd: 20, height: 0 }}
                animate={{ height: isOpen ? height : 0 }}
              >
                <div ref={measureRef}>
                  {isOpen && children}
                  {isOpen ? (
                    <div
                      style={{
                        position: 'absolute',
                        top: -20,
                        left: 14,
                        height: height,
                        width: 0,
                        borderLeft: `2px dotted ${Colors.color_primary_2}`,
                      }}
                    />
                  ) : null}
                </div>
              </motion.div>
            );
          }}
        </Measure>
      ) : null}
    </>
  );
};

export { Collapse };
