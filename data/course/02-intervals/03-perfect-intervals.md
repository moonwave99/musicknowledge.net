---
template: course/lesson
module: intervals
index: 2.3
id: perfect-intervals
slug: course/perfect-intervals
title: Perfect intervals
description: Our voices jump from note to note. But how big is the leap?
cover:
  id: pablo_picasso_musicians_with_masks
  caption: Pablo Picasso, Musicians with masks
---

In the [previous lesson][course:major-and-minor-intervals] we introduced the major and minor intervals: seconds and sevenths, thirds and sixths. Let's have a look at what's left: **the octave**, **the unison**, **fifths** and **fourths**.

## Interval of an octave

We are already friends with this pair of notes:

```abc show-piano show-octaves title="Interval between C4 and C5"
M:1/1
Q:200
L:1/1
Cc
```

_Soooome-wheeeere_...exactly! You recognized the opening line of the [beautiful Wizard of Oz song][song:somewhere-over-the-rainbow]. But we still have to talk a bit before boring things before going back to the fun parts.

[We have already seen how instrument notes contain frequencies of other notes][course:the-harmonic-series], and more specific how the relationship between notes with the same fundamental frequency is called the octave relationship. In the example above, we say that there is **an interval of an octave** between C4 and C5.

Since we know what semitones and tones are, we can measure the octave interval by counting how many consecutive keys we need to press _after_ C4 until we reach C5. Twelve!

The following observations can thus be made:

- between any two notes 12 keys apart there is an interval of an octave;
- the octave interval is made of 12 semitones (or 6 tones if you prefer);
- the distance between any two consecutive keys (regardless of the color) is one semitone;
- any octave interval on the piano keyboard will hit seven white keys and five black keys.

Going back to the letter landscape, what's the distance between a letter and the next one with the same name? Eight exactly, hence octave! In fact C(5) is the eight letter after C(4):

```txt
A B C D E F G | A B C D E F G
. . 1 2 3 4 5 | 6 7 8 . . . .
```

We say that the **number** of the C4 to C5 interval is **8** (octave), and its **size** is 12. What about the **interval quality**? We'll trace it back by the end of the lesson, stay in tune.

<div class="text-note">

### Why twelve keys in an octave?

This is actually a very good question but we cannot have worms for dinner tonight, at least not yet.

It's extremely important to know for now that the piano keyboard layout is just **one of the possible ways to divide the octave**, and is called the [equal temperament][wiki:equal-temperament].

While the octave is an intrinsic relationship of the vibration phenomenon, its subdivision in portion to achieve good sounding notes is a **human arbitrary operation**, and [there have been countless of them throughout history and cultures][wiki:musical-tuning].

Your voice can for instance sing _infinite pitches_ between any to notes, try it yourself by mimicking the sound of an engine when shifting gears! But infinite keys on a piano would be quite impractical to build so manufacturers settled for the current (even though [there are alternative layouts][wiki:isomorphic-keyboard]).

TL;DR the music predates the piano by quite a few millennia, so be open to explore the musical landscape not just in terms of distances between white and black keys or positions on the music staff.

</div>

## The unison

What happens if we consider two Cs _at the same octave_, the same note that is:

```abc show-piano show-octaves title="Interval between C4 and C4"
M:1/1
Q:200
L:1/1
CC
```

That's a completely legitimate interval and it's called **unison**. Its number is 1 and its size is 0. As for the octave interval, the quality will be revealed in a moment.

## Interval of a fifth

We have already encountered this interval after the octave while exploring the harmonic series:

```abc show-piano show-octaves title="Interval between C4 and G4"
M:1/1
Q:200
L:1/1
CG
```

Landscape exploration:

- **interval number**: C, D E, F, G: **5**/**fifth**;
- **interval size**: (C), C#, D, D#, E, F, F#, G, **7**.

The **quality** of this interval is neither minor nor major, but **perfect**. So C-G, **perfect fifth**.

As if major and minor weren't enough as interval qualities! We'll explain this after having introduced the next interval number, but not before having listened to some more perfect fifths:

```abc show-piano show-octaves title="Various perfect fifths examples"
M:1/1
Q:200
L:1/1
DA | EB | _B, F | Ae
```

## Interval of a fourth

We have already seen what an inverted interval is. What is the inverted of C(4)-G(4)? G(4)-C(5):

```abc show-piano show-octaves title="Interval between G4 and C5"
M:1/1
Q:200
L:1/1
GC
```

Landscape exploration:

- **interval number**: G, A, B, D, C: **4**/**fourth**;
- **interval size**: (G), G#, A, A#, B, C: **5**.

The **quality** of this interval is again **perfect**.

## Inverting perfect intervals

What happens if we invert a fifth for instance?

```abc show-piano show-octaves title="The C4-G4 interval and its reciprocal G4-C5"
M:1/1
Q:200
L:1/1
CG | Gc
```

C-G perfect fifth, G-C perfect fourth. Let's flip a fourth now:

```abc show-piano show-octaves title="The F4-Bb4 interval and its reciprocal Bb4-F5"
M:1/1
Q:200
L:1/1
F_B | _Bf
```

F-Bb perfect fourth, Bb-F perfect fifth. So **perfect intervals stay perfect when inverted**.

By the way, what are the reciprocals of the octave and the unison? Each other! That's because two reciprocal interval should add up to an octave, and if one of the two is already an octave the other should have no size, and the unison is the only candidate with such property. Since flipping an octave or an unison is not a particular fruitful operation, let's leave it as a theoretical curiosity only.

### Inversion number review

Now that we have seen **all possible interval numbers in the range of one octave**, let's review how they behave under inversion:

| Interval Number + Quality | Inverse Number + Quality | Example (Original) | Example (Inverted) |
| ------------------------- | ------------------------ | ------------------ | ------------------ |
| major second              | minor seventh            | C-D                | D-C                |
| minor second              | major seventh            | E-F                | F-E                |
| major third               | minor sixth              | D-F#               | F#-D               |
| minor third               | major sixth              | E-G                | G-E                |
| major sixth               | minor third              | A-F#               | F#-A               |
| minor sixth               | major third              | B-G                | G-B                |
| major seventh             | minor second             | D-C#               | C#-D               |
| minor seventh             | major second             | F-Eb               | Eb-F               |
| **perfect fourth**        | **perfect fifth**        | C-F                | F-C                |
| **perfect fifth**         | **perfect fourth**       | D-A                | A-D                |

- perfect fourths flip to perfect fifths and viceversa;
- seconds flip to sevenths and flip the quality, and viceversa;
- thirds flip to sixths and flip the quality, and viceversa.

Observe how the interval number and its inverse number **always sum up to 9**:

- 1 + 8 = 9;
- 2 + 7 = 9;
- 3 + 6 = 9;
- 4 + 5 = 9.

And viceversa because addition is commutative.

## Conclusion

WIP

## Exercises

WIP

[course:major-and-minor-intervals]: /course/major-and-minor-intervals
[course:the-harmonic-series]: /course/the-harmonic-series
[song:somewhere-over-the-rainbow]: https://www.youtube.com/watch?v=PSZxmZmBfnU
[wiki:equal-temperament]: https://en.wikipedia.org/wiki/Equal_temperament
[wiki:isomorphic-keyboard]: https://en.wikipedia.org/wiki/Isomorphic_keyboard
[wiki:musical-tuning]: https://en.wikipedia.org/wiki/Musical_tuning#Tuning_systems
