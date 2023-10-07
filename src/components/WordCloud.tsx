import React from 'react';
import { Text } from '@visx/text';
import { scaleLog } from '@visx/scale';
import Wordcloud from '@visx/wordcloud/lib/Wordcloud';

export interface WordCloudProps {
  width: number;
  height: number;
  words: Word[];
  colors: string[];
  font: string;
  fontWeight: string | number;
  fontRange: [number, number];
  onWordClick: (event?: React.MouseEvent<SVGTextElement, MouseEvent>) => void;
  onWordMouseOver: (event?: React.MouseEvent<SVGTextElement, MouseEvent>) => void;
  onWordMouseOut: (event?: React.MouseEvent<SVGTextElement, MouseEvent>) => void;
}

export interface Word {
  text: string;
  value: number;
}

export default function WordCloud({
  width,
  height,
  words,
  colors,
  font,
  fontWeight,
  fontRange,
  onWordClick,
  onWordMouseOver,
  onWordMouseOut
}: WordCloudProps) {
  const padding = 2;
  const fontScale = scaleLog({
    domain: [Math.min(...words.map((w) => w.value)), Math.max(...words.map((w) => w.value))],
    range: fontRange,
  });
  const fontSizeSetter = (word: Word) => fontScale(word.value);
  const fixedValueGenerator = () => 0.5;

  return (
    <Wordcloud
      words={words}
      width={width}
      height={height}
      fontSize={fontSizeSetter}
      font={font}
      padding={padding}
      fontWeight={fontWeight}
      spiral="rectangular"
      rotate={0}
      random={fixedValueGenerator}
    >
      {
        (words) => {
          return words.map((w, i) => {
            return (
              <Text
                key={w.text}
                fill={colors[i % colors.length]}
                textAnchor={'middle'}
                transform={`translate(${w.x}, ${w.y}) rotate(${w.rotate})`}
                fontSize={w.size}
                fontFamily={w.font}
                fontWeight={w.weight}
                onClick={onWordClick}
                onMouseOver={onWordMouseOver}
                onMouseOut={onWordMouseOut}
              >
                {w.text}
              </Text>
            )
          })
        } 
      }
    </Wordcloud>
  )
}