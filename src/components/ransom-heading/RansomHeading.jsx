import "./RansomHeading.css";

function RansomHeading({ globalFontSize }) {
  return (
    <div>
        <div
        id="ransomizer-skcbju0n"
        style={{
            textAlign: "var(--global-text-align)",
            fontSize: globalFontSize,
        }}
        >
        <div className="ts">
            <div className="tw">
            {[
                ["s", 0],
                ["a", 1],
                ["m", 2],
                ["a", 3],
                ["n", 4],
                ["t", 5],
                ["h", 6],
                ["a", 7],
                ["!", 8],
            ].map(([char, style], i) => (
                <div key={i} className={`tc mlvx-${style}`}>
                <div>{char}</div>
                </div>
            ))}
            </div>
        </div>
        </div>
    </div>
  );
}

export default RansomHeading;