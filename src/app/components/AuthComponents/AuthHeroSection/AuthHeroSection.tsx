import { LuGift, LuGitCommit, LuLayers } from 'react-icons/lu';
import { HeroSectionText } from './HeroSectionText/HeroSectionText';

export function AuthHeroSection() {
  return (
    <section className='hidden h-full w-full flex-col items-center justify-safe-center gap-16 overflow-y-auto xl:flex'>
      <HeroSectionText
        title='Lorem ipsum'
        sub='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam in urna pellentesque, ullamcorper ex ut, dapibus.'
        icon={<LuGift size={40} color='#60a5fa' />}
      />
      <HeroSectionText
        title='Lorem ipsum'
        sub='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam in urna pellentesque, ullamcorper ex ut, dapibus.'
        icon={<LuGitCommit size={40} color='#60a5fa' />}
      />
      <HeroSectionText
        title='Lorem ipsum'
        sub='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam in urna pellentesque, ullamcorper ex ut, dapibus.'
        icon={<LuLayers size={40} color='#60a5fa' />}
      />
    </section>
  );
}
