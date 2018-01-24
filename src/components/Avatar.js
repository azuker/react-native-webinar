import React, { Component } from 'react';
import { Image, StyleSheet } from 'react-native';

const Avatar = ({uri}) => (
  <Image 
        style={ styles.image } source={{ uri }}/>
)

const styles = StyleSheet.create({
  image: {
    borderRadius: 40,
    width: 80, 
    height: 80
  }
})

export default Avatar;