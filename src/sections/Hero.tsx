import {Avatar} from '@astryxdesign/core/Avatar';
import {Badge} from '@astryxdesign/core/Badge';
import {Button} from '@astryxdesign/core/Button';
import {Heading} from '@astryxdesign/core/Heading';
import {HStack} from '@astryxdesign/core/HStack';
import {Icon} from '@astryxdesign/core/Icon';
import {Text} from '@astryxdesign/core/Text';
import {VStack} from '@astryxdesign/core/VStack';
import {Mail} from 'lucide-react';

import {Container} from '../components/Container';
import {LinkedinLogo} from '../components/icons';
import {Reveal} from '../components/Reveal';
import {site} from '../data/site';
import {smoothScrollTo} from '../lib/scroll';

export function Hero() {
  return (
    <section id="top" className="hero section section--hero section-anchor">
      <Container>
        <Reveal>
          <VStack gap={5} hAlign="start">
            <HStack gap={5} vAlign="center" wrap="wrap">
              <span className="avatar-ring">
                <Avatar src={site.avatar} name={site.name} size={96} />
              </span>
              <VStack gap={2} hAlign="start">
                <Heading level={1} type="display-1">
                  <span className="hero-name">{site.name}</span>
                </Heading>
                <Text type="label" color="accent">
                  {site.role}
                </Text>
                <div className="hero-badges">
                  {site.keywords.map((kw) => (
                    <Badge key={kw} variant="purple" label={kw} />
                  ))}
                </div>
              </VStack>
            </HStack>

            <Text type="large" color="secondary" maxLines={4}>
              {site.tagline}
            </Text>

            <HStack gap={3} vAlign="center" wrap="wrap">
              <Button
                label="Get in touch"
                variant="primary"
                icon={<Icon icon={Mail} />}
                onClick={() => smoothScrollTo('contact')}
              />
              <Button
                label="View LinkedIn"
                variant="secondary"
                icon={<Icon icon={LinkedinLogo} />}
                onClick={() =>
                  window.open(
                    site.socials.linkedin,
                    '_blank',
                    'noopener,noreferrer',
                  )
                }
              />
            </HStack>
          </VStack>
        </Reveal>
      </Container>
    </section>
  );
}
