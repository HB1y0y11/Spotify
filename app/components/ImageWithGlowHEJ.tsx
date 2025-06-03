import React, { useEffect, useState } from 'react';
import {
  View,
  Image,
  StyleSheet,
  ImageSourcePropType,
  ImageResolvedAssetSource,
} from 'react-native';
import { getColors, ImageColorsResult } from 'react-native-image-colors';

export type PropsHEJ = {
  source: ImageSourcePropType;
  styleImageHEJ?: any;
  glowWidth?: number;
  glowHeight?: number;
  glowOpacity?: number;
};

export default function ImageWithGlowHEJ({ source, styleImageHEJ, glowWidth = 250, glowHeight = 250, glowOpacity = 0.2 }: PropsHEJ) {
  const [colorHEJ, setColorHEJ] = useState('#222');

  useEffect(() => {
    const loadColorHEJ = async () => {
      let uri: string | undefined;

      if (typeof source === 'number') {
        const resolvedAsset: ImageResolvedAssetSource = Image.resolveAssetSource(source);
        uri = resolvedAsset.uri;
      } else if (source && 'uri' in source) {
        uri = source.uri;
      }

      if (!uri) return;

      try {
        const resultHEJ: ImageColorsResult = await getColors(uri, {
          fallback: '#222',
          cache: true,
          key: uri,
        });

        if (resultHEJ.platform === 'android') {
          setColorHEJ(resultHEJ.dominant || '#222');
        } else if (resultHEJ.platform === 'ios') {
          setColorHEJ(resultHEJ.background || '#222');
        } else {
          setColorHEJ(resultHEJ.lightVibrant || '#222');
        }
      } catch (e) {
        return;
      }
    };

    loadColorHEJ();
  }, [source]);

  return (
    <View style={stylesHEJ.wrapperHEJ}>
      {/* GLOW BORRADO COLORIDO ATRÁS */}
      <View style={stylesHEJ.glowWrapperHEJ}>
        <View
          style={[
            stylesHEJ.glowCircleHEJ,
            {
              backgroundColor: colorHEJ,
              width: glowWidth,
              height: glowHeight,
              opacity: glowOpacity,
            },
          ]}
        />
      </View>

      {/* IMAGEM NORMAL */}
      <Image source={source} style={styleImageHEJ} />
    </View>
  );
}

const stylesHEJ = StyleSheet.create({
  wrapperHEJ: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  glowWrapperHEJ: {
    position: 'absolute',
    zIndex: -1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  glowCircleHEJ: {
    width: 250,
    height: 250,
    borderRadius: 100,
    opacity: 0.2,
    filter: 'blur(20px)',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.8,
    shadowRadius: 20,
    elevation: 10,
  },
});
