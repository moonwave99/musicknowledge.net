---
template: course/lesson
module: intervals
index: 2.4
id: augmented-and-diminished-intervals
slug: course/augmented-and-diminished-intervals
title: Augmented and diminished intervals
description: Our voices jump from note to note. But how big is the leap?
cover:
  id: andre_derain_music
  caption: Andre Derain, Music
---

We have seen that some intervals may change quality when shrinking or enlarging, namely seconds, thirds, sixths and sevenths. What happens if we do the same to perfect intervals?

## Enlarging fifths and fourths

Let's take our favorite perfect fifth, C to G, and let's raise the G by a semitone by sharpening it:

```abc show-piano show-octaves title="Interval between C4 and G4, and between C4 and G#4"
M:1/1
Q:200
L:1/1
CG | C^G
```

We still have a fifth (C to G), but it cannot be perfect because its size is now 7 plus 1 equals 8. We call it an **augmented fifth**.

Same applies to the fourth interval:

```abc show-piano show-octaves title="Interval between E4 and A4, and between E4 and A#4"
M:1/1
Q:200
L:1/1
EA | E^A
```

From E to A# we have a fourth of **six semitones** now, the **augmented fourth**. This interval size is very very important, we'll go back to it in a minor second.

## Shrinking fifths and fourths

Let's make things smaller now:

```abc show-piano show-octaves title="Interval between C4 and G4, and between C4 and Gb4"
M:1/1
Q:200
L:1/1
CG | C_G
```

Still a fifth, but smaller (7 minus 1 equals 6 semitones). It's a **diminished fifth**.

Hey, but don't we have just seen an interval of the same size, the augmented fourth? Let's hear and observe them starting from the same note:

```abc show-piano show-octaves title="Interval between C4 and F#4, and between C4 and Gb4"
M:1/1
Q:200
L:1/1
C^F | C_G
```

(If this sounds to you like the end of the initial riff of Master of Puppets, the answer is yes)

We have already seen that intervals of different number and quality may have the same size. This is the most important example, her majesty **the tritone**! No, it has nothing to do neither with the sea depths nor with the devil, it is so called because of its size of six semitones or three tones.

We haven't discussed interval dissonance or consonance yet. The tritone is a dissonant one and appears inside melodies and chords. It's important to know that it may appear as an augmented fourth or as a diminished fifth.

## Enlarging major intervals

We can do the same with non-perfect intervals too:

```abc show-piano show-octaves title="Interval between F4 and G4, and between F4 and G#4"
M:1/1
Q:200
L:1/1
FG | F^G
```

If we widen a major second (F-G, two semitones) we get **an augmented second** (F-G#, three semitones).

<aside>

### Again a note on enharmonics

[We have already seen why this is not a minor third][course:a-note-on-enharmonics]. That would be F-Ab, but do you remember how do we determine the interval number? **By walking the letter landscape**, and there the accidentals don't play any role:

- F to G#: F (1), G (2), **second**;
- F to Ab: F (1), G (2), A (3), **third**.

Why is this so important? Let's have a look and a listen to the following two scales:

```abc show-piano show-octaves title="The A natural minor and A harmonic minor scales"
M:1/1
Q:200
L:1/1
ABcdefga | ABcdef^ga
```

See how the second one contains the same F-G# interval we are considering now.

If we would write it as Ab, we would need to notate the scale as:

```abc show-piano show-octaves title="A wrongly notated A harmonic minor scale"
M:1/1
Q:200
L:1/1
ABcdef_a=a
```

This would be highly impractical because we would have to continuously alter the A note depending on our need. That's why **seven-note scales should feature every note name only once with the right accidentals**.

We'll see minor scales in the corresponding lesson. For now observe how the **harmonic minor** scale is obtained from the **natural minor** by **rising its seventh degree by a semitone**, making it a **leading tone** like in the major scale, only a semitone below the tonic. This flavor of the scale is what make music sound like this:

WIP

</aside>

## Shrinking minor intervals

This scenario is on the other hand quite unusual. An example is the following:

```abc show-piano show-octaves title="An E full diminished chord and its intervals from the root"
M:1/1
Q:200
L:1/1
[EG_B_d] || E G | E_B | E_d
```

This is a E full diminished chord, whose intervals from the root are:

- **minor third** (E-G);
- **diminished fifth** (E-Bb);
- **diminished seventh** (E-Db);

Wouldn't E-Dbb be rather better spelled as E-C#? Most of the time, but to keep it built as a seventh chord we need some kind of seventh interval from the root.

We say that E-Db is **enharmonic equivalent** to the E-C# **major sixth** interval.

## Inverting augmented and diminished intervals

Let's see what happens when we invert an augmented interval:

```abc show-piano show-octaves title="An augmented fifth interval and its inverse"
M:1/1
Q:200
L:1/1
C^G | ^G c
```

From C-G# we get G#-C, what kind of interval it is? Since we are already good with intervals, we can make all the following considerations:

- C-G is a perfect fifth, so its inverse (G-C) is a perfect fourth;
- G#-C must be a fourth of some kind as well, because the letter landscape does not take accidentals into account;
- the lower note of the interval is being raised, so the interval shrinks by one semitone;
- when we shrink a perfect fourth we get a **diminished fourth**.

Let's flip a diminished fifth now:

```abc show-piano show-octaves title="A diminished fifth interval and its inverse"
M:1/1
Q:200
L:1/1
E_B | _Be
```

I leave to you to check that Bb-E is **an augmented fourth**.

In general, augmented and diminished intervals **flip the quality to the opposite kind** when inverted, besides changing number to their complement to nine (2 to 7, 3 to 6, 4 to 5...).

## Conclusion

WIP

## Exercises

WIP

[course:a-note-on-enharmonics]: /course/introduction-to-intervals#a-note-on-enharmonics
