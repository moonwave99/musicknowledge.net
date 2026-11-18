---
template: course/lesson
index: 4
id: the-harmonized-major-scale
slug: course/the-harmonized-major-scale
title: The harmonized major scale
date: 2026-11-12
description: Make sense of chord motions by having a look at the big picture.
cover:
  id: arthur_hughes_a_music_party
  caption: Arthur Hughes, A music party
---

We'll see some examples in the key of **C major** for example's sake, and because it's easy to navigate the white keys. This does not mean you should neglect the other keys! But this is the easiest starting point if you are not familiar with chord building.

## The degrees of the major scale

This is one octave of the C major scale:

```abc show-piano show-octaves title="The C major scale"
M:1/1
Q:200
L:1/1
CDEFGABc
w: C D E F G A B (C)
w: 1 2 3 4 5 6 7 (1)
```

We associate an ascending number to each note. The notes of a scale are called **degrees**. We say for instance that _G is the fifth degree of the C major scale_. C is obviously the first degree of the C major scale.

### The C major triad

As the name suggests, a **triad** is a **chord made of three notes**.

There are various ways to build triads, let's take the empiric route:

- we start from **C** (1);
- let's skip a note (D, 2);
- keep the next, **E** (3);
- skip a note again (F, 4);
- and keep the next, **G**, (5).

We end up with the notes **C E G**:

```abc show-piano show-octaves title="The C major triad"
M:1/1
Q:200
L:1/1
[CEG]
```

That's the **C major triad**, built on degrees 1, 3 and 5 of the C major scale.

C major. _C_ because it's rooted on the note C. _Major_ because the distance between the first two notes of the chord (C and E) is an interval of a **major third**, made of **four semitones**. If your interval knowledge is shaky, [you can brush it up here][course:intervals].

<div class="text-note">

ℹ️ **Note**: remember that the notes that form a chord may appear in any order, and even more than once.

All the chords below are C major chords, even if the bottom note played is not a C:

```abc show-piano show-octaves title="Some possible C major chords"
M:1/1
Q:200
L:1/1
[CEG] [EGc] [Gce] | [CGe] [Ecg] [G,Ec] | [CEGc] [EGce] [Gceg]
```

If the bottom note of the chord is not the root note, we call it **an inversion of the chord**.

</div>

### The D minor triad

Now let's do exactly the same thing but starting from the note after C, i.e. D. We'll end up with the notes **D F A**:

```abc show-piano show-octaves title="The D minor triad"
M:1/1
Q:200
L:1/1
[DFA]
```

That's the **D minor** triad. Check the distance between D and F: it's three semitones, a **minor third**! That's why it's called D minor.

### All the triads of C major

If you apply the same process to each note of the scale, you'll obtain the following triads:

```abc show-piano show-octaves title="The harmonized C major scale"
M:1/1
Q:200
L:1/1
[CEG] [DFA] [EGB] [FAc] [GBd] [Ace] [Bdf]
w: C Dm Em F G Am Bo
```

<div class="text-note">

ℹ️ **Note**: extremely important, _don't skip this process!_ You'll be able to comfortably navigate the note landscape just if you explore it yourself. Don't resort to existing schemas, use them just to check that your wanderings brought you to the right places.

</div>

In a more structured way:

| Root note | Degree number | Chord name   | Chord notes |
| --------- | ------------- | ------------ | ----------- |
| C         | 1             | C major      | C E G       |
| D         | 2             | D minor      | D F A       |
| E         | 3             | E minor      | E G B       |
| F         | 4             | F major      | F A C       |
| G         | 5             | G major      | G B D       |
| A         | 6             | A minor      | A C E       |
| B         | 7             | B diminished | B D F       |

Observations:

- degrees 1, 4 and 5 - C, F and G - are **major**;
- degrees 2, 3 and 6 - D, E and A - are **minor**;
- degree 7 - B - is **diminished**.

Why diminished? Because the distance between the first and the third note of the chord (B to F) is **a diminished fifth**, made of 6 semitones. This interval is also called the **tritone**, we'll talk about its importance more in detail later.

The distance between the first and the third note of all the other chords is always of 7 semitones or a **perfect fifth** (count it yourself on the keyboard!).

By the way, this process is called **the harmonization of the C major key**, or building **the diatonic triads of the key of C major**. Diatonic means _strictly belonging to the key_. Why do we specify it? because you may have noticed how we haven't touched any black key in this process. But nothing prevents us from playing them!

```abc show-piano show-octaves title="The A and D chords are not diatonic to C major"
M:1/1
Q:200
L:1/1
[CEG] [A,^CE] [D^FA] [GBd]
w: C A D G
```

In the progression above we played C major, A major, D major and G major.

We say that C and G are **diatonic to C major** because they contain just notes of the key, while A and D major are **chromatic** (or non-diatonic) because they feature C# and F# respectively. There is nothing wrong in being non-diatonic! We'll see soon how and when non-diatonic chords are used, for now let's stick to diatonic ones.

## From chord names to numbers

Now that we know the diatonic chords of C major and their qualities, we can refer to the chords by their numbers and play the following progressions:

```abc show-piano show-octaves title="1-6-2-5 progression in C major"
M:1/1
Q:200
L:1/1
[CEG] [A,CE] [DFA] [GBd]
w: 1 6 2 5
```

This is called the **doo-wop progression**.

```abc show-piano show-octaves title="6-4-1-5 progression in C major"
M:1/1
Q:200
L:1/1
[A,CE] [FAc] [CEG] [GBd]
w: 6 4 1 5
```

This is an ubiquitous progression in rock and pop music.

## Chord inversions

The examples above do not sound particularly nice, this is because the chords appear always in root position and the voices jump too much. Let's try to minimize the jumps of the `1 6 2 5` progression:

```abc show-piano show-octaves title="1-6-2-5 progression with rearranged voices"
M:1/1
Q:200
L:1/1
[CEG] [CEA] [DFA] [DGB]
w: 1 6 2 5
```

That's my boy! Now fill it with the left hand:

```abc show-piano show-octaves start-octave="2" title="1-6-2-5 progression with bass notes"
M:1/1
Q:200
L:1/1
%%staves \{V1 V2\}
V:V1 clef=treble
V:V2 clef=bass
[V:V1] [CEG] [CEA] [DFA] [DGB]
[V:V2] C, A,, D, G,,
w: 1 6 2 5
```

It's already sounding like real music! Observe how the bass makes big leaps between chords, while the upper voice stay as close as possible. This process is called **voice leading**.

Sometimes you don't want big leaps in the bass, some other times you want the upper voice to move wildly. But before breaking the rules, become friend with them!

<div class="text-note">

ℹ️ **Note**: chord inversions take into consideration **the lowest note being played**, and not just one hand. So in the example with the left hand bass we have **all chords in root position**. But it is safe to say that we are playing inversions of A minor and G major **in the right hand alone**. Context matters!

</div>

## You can (and should) harmonize any key

We made this interactive experiment in the key of C major because it's very easy to follow it using just the white keys. But what if we want to play a `1 6 2 5` in G major?

First we harmonize the G major scale. Remember first how G major has an **F sharp** in the key signature:

```abc show-piano show-octaves title="The harmonized G major scale"
M:1/1
Q:200
L:1/1
K: G
[GBd] [Ace] [Bdf] [ceg] [dfa] [egb] [fac']
w: G Am Bm C D Em F#o
```

Structuring:

| Root note | Degree number | Chord name    | Chord notes |
| --------- | ------------- | ------------- | ----------- |
| G         | 1             | G major       | G B D       |
| A         | 2             | A minor       | A C E       |
| B         | 3             | B minor       | B D F#      |
| C         | 4             | C major       | C E G       |
| D         | 5             | D major       | D F# A      |
| E         | 6             | E minor       | E G B       |
| F#        | 7             | F# diminished | F# A C      |

## Song examples

WIP

## Conclusion

WIP

## Exercises

WIP

[course:intervals]: /course/intervals
