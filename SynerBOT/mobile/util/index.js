import { Platform, NetInfo, findNodeHandle } from 'react-native';

export const processInputFocused = (inputComponent, offset, delay, scroll) => {
  setTimeout(() => {
    const scrollResponder = scroll.getScrollResponder();
    scrollResponder.scrollResponderScrollNativeHandleToKeyboard(
        findNodeHandle(inputComponent),
        offset, // additionalOffset
        true
    );
  }, delay);
};