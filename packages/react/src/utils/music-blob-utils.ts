export const getLoudness = (
  dataArray: Uint8Array,
  analyser: AnalyserNode,
  sampleRate: number
) => {
  const nyquist = sampleRate / 2;
  const lowFreqEnd = 200; // End of low frequencies
  const midFreqEnd = 5000; // End of mid frequencies

  const lowIndexEnd = Math.floor(
    (lowFreqEnd / nyquist) * analyser.frequencyBinCount
  );
  const midIndexEnd = Math.floor(
    (midFreqEnd / nyquist) * analyser.frequencyBinCount
  );

  // Calculate average for low frequencies
  const lowFreqs = dataArray.slice(0, lowIndexEnd);
  const avgLow =
    lowFreqs.reduce((sum, value) => sum + value, 0) / lowFreqs.length;

  // Calculate average for mid frequencies
  const midFreqs = dataArray.slice(lowIndexEnd, midIndexEnd);
  const avgMid =
    midFreqs.reduce((sum, value) => sum + value, 0) / midFreqs.length;

  // Calculate average for high frequencies
  const highFreqs = dataArray.slice(midIndexEnd);
  const avgHigh =
    highFreqs.reduce((sum, value) => sum + value, 0) / highFreqs.length;

  return {
    avgLow,
    avgMid,
    avgHigh,
    overallLoudness: ((avgLow + avgMid + avgHigh) / 3)/255, // overall loudness
  };
};
