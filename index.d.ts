import * as React from 'react';

export interface PlayerVars {
  autoplay?: 0 | 1;
  cc_load_policy?: 1;
  color?: 'red' | 'white';
  controls?: 0 | 1 | 2;
  disablekb?: 0 | 1;
  enablejsapi?: 0 | 1;
  end?: number;
  fs?: 0 | 1;
  hl?: string;
  iv_load_policy?: 1 | 3;
  list?: string;
  listType?: 'playlist' | 'search' | 'user_uploads';
  loop?: 0 | 1;
  modestbranding?: 1;
  origin?: string;
  playlist?: string;
  playsinline?: 0 | 1;
  rel?: 0 | 1;
  showinfo?: 0 | 1;
  start?: number;
  mute?: 0 | 1;
}

export interface Options {
  height?: string;
  width?: string;
  host?: string;
  playerVars?: PlayerVars;
}

export interface YouTubeProps {
  videoId?: string;
  id?: string;
  className?: string;
  containerClassName?: string;
  opts?: Options;
  onReady?(event: { target: YT.Player }): void;
  onError?(event: { target: YT.Player; data: number }): void;
  onPlay?(event: { target: YT.Player; data: number }): void;
  onPause?(event: { target: YT.Player; data: number }): void;
  onEnd?(event: { target: YT.Player; data: number }): void;
  onStateChange?(event: { target: YT.Player; data: number }): void;
  onPlaybackRateChange?(event: { target: YT.Player; data: number }): void;
  onPlaybackQualityChange?(event: { target: YT.Player; data: string }): void;
}

export default class YouTube extends React.Component<YouTubeProps> {
  static PlayerState: {
    UNSTARTED: number;
    ENDED: number;
    PLAYING: number;
    PAUSED: number;
    BUFFERING: number;
    CUED: number;
  };
  getInternalPlayer(): YT.Player;
}
