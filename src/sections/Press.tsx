import {useRef} from 'react';

import {Badge} from '@astryxdesign/core/Badge';
import {ClickableCard} from '@astryxdesign/core/ClickableCard';
import {Heading} from '@astryxdesign/core/Heading';
import {HStack} from '@astryxdesign/core/HStack';
import {Icon} from '@astryxdesign/core/Icon';
import {IconButton} from '@astryxdesign/core/IconButton';
import {Text} from '@astryxdesign/core/Text';
import {VStack} from '@astryxdesign/core/VStack';
import {ArrowUpRight} from 'lucide-react';

import {Container} from '../components/Container';
import {Reveal} from '../components/Reveal';
import {SectionHeading} from '../components/SectionHeading';
import {site} from '../data/site';

type BadgeVariant = 'purple' | 'blue' | 'cyan' | 'neutral';

const TOPIC_VARIANT: Record<string, BadgeVariant> = {
  'AI · Design Systems': 'purple',
  AI: 'purple',
  'Trust & Safety': 'blue',
  Integrity: 'cyan',
};

export function Press() {
  const railRef = useRef<HTMLDivElement>(null);

  const scrollByPage = (direction: number) => {
    const el = railRef.current;
    if (el == null) {
      return;
    }
    const reduceMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches;
    el.scrollBy({
      left: direction * el.clientWidth * 0.85,
      behavior: reduceMotion ? 'auto' : 'smooth',
    });
  };

  return (
    <section id="press" className="section section-anchor surface">
      <Container>
        <Reveal>
          <VStack gap={6}>
            <HStack hAlign="between" vAlign="center" wrap="wrap" gap={3}>
              <SectionHeading eyebrow="Press" title="In the news" />
              <HStack gap={2} vAlign="center">
                <IconButton
                  label="Scroll to previous"
                  variant="secondary"
                  icon={<Icon icon="chevronLeft" />}
                  onClick={() => scrollByPage(-1)}
                />
                <IconButton
                  label="Scroll to next"
                  variant="secondary"
                  icon={<Icon icon="chevronRight" />}
                  onClick={() => scrollByPage(1)}
                />
              </HStack>
            </HStack>

            <div className="press-scroller" ref={railRef}>
              {site.press.map((item) => (
                <ClickableCard
                  key={item.url}
                  className="press-card"
                  href={item.url}
                  target="_blank"
                  label={item.title}
                  padding={4}>
                  <VStack gap={3} hAlign="start" height="100%">
                    <HStack gap={2} vAlign="center" hAlign="between" wrap="wrap">
                      <Badge
                        variant={TOPIC_VARIANT[item.topic] ?? 'neutral'}
                        label={item.topic}
                      />
                      <Text type="supporting" color="secondary">
                        {item.outlet} · {item.date}
                      </Text>
                    </HStack>
                    <Heading level={4} maxLines={3}>
                      {item.title}
                    </Heading>
                    <Text type="body" color="secondary" maxLines={3}>
                      {item.blurb}
                    </Text>
                    <div className="press-readmore">
                      <HStack gap={1} vAlign="center">
                        <Text type="label" color="accent">
                          Read article
                        </Text>
                        <Icon icon={ArrowUpRight} size="sm" color="accent" />
                      </HStack>
                    </div>
                  </VStack>
                </ClickableCard>
              ))}
            </div>
          </VStack>
        </Reveal>
      </Container>
    </section>
  );
}
