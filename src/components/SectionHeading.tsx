import {Heading} from '@astryxdesign/core/Heading';
import {Text} from '@astryxdesign/core/Text';
import {VStack} from '@astryxdesign/core/VStack';

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
};

export function SectionHeading({eyebrow, title}: SectionHeadingProps) {
  return (
    <VStack gap={2} hAlign="start">
      {eyebrow != null && (
        <div className="kicker">
          <Text type="label" color="accent">
            {eyebrow}
          </Text>
        </div>
      )}
      <Heading level={2}>{title}</Heading>
    </VStack>
  );
}
