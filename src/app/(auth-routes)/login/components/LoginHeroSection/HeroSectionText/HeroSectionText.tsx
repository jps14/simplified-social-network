import { ReactElement } from 'react';
import { IconBaseProps } from 'react-icons';

interface IHeroSectionTextProps {
  title: string;
  sub: string;
  icon: ReactElement<IconBaseProps>;
}

export function HeroSectionText(props: IHeroSectionTextProps) {
  return (
    <article className='w-3/4'>
      <div className='flex flex-row items-center gap-3'>
        {props.icon}
        <h1 className='xl:text-xl text-lg font-bold'>{props.title}</h1>
      </div>
      <p className='mt-3 xl:text-base text-sm'>{props.sub}</p>
    </article>
  );
}
