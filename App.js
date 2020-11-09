/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {View, Image} from 'react-native';

// 10 nested views plus a child
const TestComponent = ({children}) => {
  return (
    <View>
      <View>
        <View>
          <View>
            <View>
              <View>
                <View>
                  <View>
                    <View>
                      <View>{children}</View>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

// 10 nested TestComponent instances
const App = () => {
  return (
    <TestComponent>
      <TestComponent>
        <TestComponent>
          <TestComponent>
            <TestComponent>
              <TestComponent>
                <TestComponent>
                  <TestComponent>
                    <TestComponent>
                      <TestComponent>
                        <TestComponent>
                                {/*
                                 * 111 tree child item
                                 */}
                                <Image source={require('./synchronize.png')} />
                                <View>
                                  {/*
                                   * 112 tree child item
                                   * when commented crash does not happen
                                   */}
                                  <View
                                    style={{
                                      backgroundColor: 'red',
                                      height: 50,
                                      width: 50,
                                    }}
                                  />
                                </View>
                        </TestComponent>
                      </TestComponent>
                    </TestComponent>
                  </TestComponent>
                </TestComponent>
              </TestComponent>
            </TestComponent>
          </TestComponent>
        </TestComponent>
      </TestComponent>
    </TestComponent>
  );
};

export default App;
