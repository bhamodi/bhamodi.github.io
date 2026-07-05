import {HStack} from '@astryxdesign/core/HStack';
import {Link} from '@astryxdesign/core/Link';
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
          <Link href="#top" onClick={scrollToId('top')}>
            <Text type="label" weight="bold" color="primary">
              {site.name}
            </Text>
          </Link>

          <HStack gap={2} vAlign="center">
            <ThemeToggle />
            <SocialLinks />
          </HStack>
        </HStack>
      </Container>
    </header>
  );
}
