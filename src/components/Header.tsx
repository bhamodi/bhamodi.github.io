import {HStack} from '@astryxdesign/core/HStack';
import {Text} from '@astryxdesign/core/Text';

import {site} from '../data/site';
import {scrollToId} from '../lib/scroll';
import {Container} from './Container';
import {SocialLinks} from './SocialLinks';
import {ThemeToggle} from './ThemeToggle';

export function Header() {
  return (
    <header className="site-header">
      <Container>
        <HStack height={64} vAlign="center" hAlign="between">
          <a className="brand" href="#top" onClick={scrollToId('top')}>
            <Text type="label" weight="bold" color="primary">
              {site.name}
            </Text>
          </a>

          <HStack gap={2} vAlign="center">
            <ThemeToggle />
            <SocialLinks />
          </HStack>
        </HStack>
      </Container>
    </header>
  );
}
