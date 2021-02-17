import React from 'react';
import {
  Container,
  Title,
  Subtitle,
  Text,
  Group,
  Link,
  Image,
  ImageContainer,
} from './styles/feature'

export default function Feature({children, ...restProps}) {
  return <Container id="feature" {...restProps}>{children}</Container>
}

Feature.Group = function FeatureGroup({children, ...restProps}) {
  return <Group {...restProps}>{children}</Group>
}

Feature.Title = function FeatureTitle({children, ...restProps}) {
  return <Title {...restProps}>{children}</Title>
}

Feature.Subtitle = function FeatureSubtitle({children, ...restProps}) {
  return <Subtitle {...restProps}>{children}</Subtitle>
}
Feature.Text = function FeatureText({children, ...restProps}) {
  return <Text {...restProps}>{children}</Text>
}


Feature.Link = function FeatureLink({children, ...restProps}) {
  return <Link {...restProps}>{children}</Link>
}

Feature.Image = function FeatureImage({...restProps}) {
  return <Image {...restProps} />
}
Feature.ImageContainer = function FeatureImageContainer({children, ...restProps}) {
  return <ImageContainer {...restProps}>{children}</ImageContainer>
}