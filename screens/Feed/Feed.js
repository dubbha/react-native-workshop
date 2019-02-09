
// @flow
import React, { Component } from 'react';
import { View, Text, TouchableOpacity, ActivityIndicator, SafeAreaView } from 'react-native';

import MoviesList from './../../components/MoviesList';

import { fetchMovies } from './../../api';

import sharedStyle from './../../shared/style';
import style from './style';

type Props = {
  
};

type State = {
  loading: boolean;
  data: any;
  page: number;
};

class Feed extends Component<Props, State> {
  state = {
    loading: false,
    data: null,
    page: 1,
  };

  componentDidMount() {
    // this.loadMovies();
  }

  loadMovies = () => {
    this.setState({ loading: true });
    
    fetchMovies(this.state.page)
      .then(res => {
        if (this.state.data) {
          this.setState({ data: [...this.state.data, ...res] });
          // this.state.data.push(...res)
        } else {
          this.setState({ data: res });
        }
        this.setState({ loading: false });
      })
      .catch(err => {
        console.error(err);
        this.setState({ loading: false });
      });
  };

  loadMore = () => {
    this.setState((state) => ({ page: state.page + 1}), this.loadMovies);
  };

  render() {
    const { loading, data } = this.state;

    return (
      <SafeAreaView style={sharedStyle.container}>
        {!data && !loading && (
          <TouchableOpacity
            onPress={this.loadMovies}
            style={style.button}
          >
            <Text style={style.buttonLabel}>Find Stuff</Text>
          </TouchableOpacity>
        )}
        <MoviesList
          loadMore={this.loadMore}
          loading={loading}
          data={data}
        />
      </SafeAreaView>
    );
  }
}

export default Feed;
