import "styled-components"
import { CSSProperties, ThemeProps } from "styled-components"

type styleTypes = {
  light: CSSProperties
}

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primary: string
      secondary: string
      body: string
      heading: string
      border: string
      bgBody: string
      bgDark: string
      lightTheme: string
      lightSecondary: string
      lightBody: string
      lightHeading: string
      lightBorder: string
      lightBgBody: string
      lightBgDark: string
      facebook: string
      messenger: string
      twitter: string
      googlePlus: string
      pinterest: string
      linkedin: string
      flickr: string
      dribbble: string
      google: string
      skype: string
      behance: string
      youtube: string
      vimeo: string
      yahoo: string
      paypal: string
      delicious: string
      flattr: string
      android: string
      tumblr: string
      wikipedia: string
      stumbleupon: string
      foursquare: string
      digg: string
      spotify: string
      reddit: string
      cc: string
      vk: string
      rss: string
      podcast: string
      dropbox: string
      github: string
      soundcloud: string
      wordpress: string
      yelp: string
      scribd: string
      ccStripe: string
      drupal: string
      slideshare: string
      getPocket: string
      bitbucket: string
      xing: string
      instagram: string
      quora: string
      openid: string
      steam: string
      amazon: string
      weibo: string
      blogger: string
      whatsapp: string
      wechat: string
      line: string
      medium: string
      vine: string
      slack: string
      snapchat: string
    }
    fonts: {
      primary: string
    }
    styles: {
      light: FlattenInterpolation<ThemeProps<DefaultTheme>>
    }
    keyframes: {
      fadeInDown: Interpolation<ThemeProps<DefaultTheme>>
      fadeInUp: Interpolation<ThemeProps<DefaultTheme>>
      fadeInLeft: Interpolation<ThemeProps<DefaultTheme>>
      fadeInRight: Interpolation<ThemeProps<DefaultTheme>>
    }
    device: {
      desktop: string
      desktopXs: string
      notebook: string
      laptop: string
      tablet: string
      mobileLg: string
      mobileSm: string
      mobileXs: string
    }
    variables: {
      body: string
      inputButtonHeight: string
      transition: string
    }
    mixins: {
      grid: (placement?: string, align?: string) => {}
      flex: (direction?: string, justify?: string, align?: string) => {}
      textHoverEffect: (color?: string) => {}
      transitionEffect: (property?: string) => {}
      lineClamp: (numberOfLines: number) => {}
      flexGap: (gap: string) => {}
    }
  }
}
