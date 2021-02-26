var sorting = {
  bubble: {
    defination:
      "Bubble sort is based on the idea of repeatedly comparing pairs of adjacent elements and then swapping their positions if they exist in the wrong order.",
    brief:
      "Assume that A[] is an unsorted array of n elements. This array needs to be sorted in ascending order. The pseudo code is as follows:",
  },
  selection: {
    defination:
      "The Selection sort algorithm is based on the idea of finding the minimum or maximum element in an unsorted array and then putting it in its correct position in a sorted array.",
  },
  insertion: {
    defination:
      "Insertion sort is based on the idea that one element from the input elements is consumed in each iteration to find its correct position i.e, the position to which it belongs in a sorted array.",
  },
  merge: {
    defination:
      "Merge sort is a divide-and-conquer algorithm based on the idea of breaking down a list into several sub-lists until each sublist consists of a single element and merging those sublists in a manner that results into a sorted list.",
  },
  quick: {
    defination:
      "Quick sort is based on the divide-and-conquer approach based on the idea of choosing one element as a pivot element and partitioning the array around it such that: Left side of pivot contains all the elements that are less than the pivot element Right side contains all elements greater than the pivot",
  },
  heap: {
    defination:
      "Heaps can be used in sorting an array. In max-heaps, maximum element will always be at the root. Heap Sort uses this property of heap to sort the array.<br>Consider an array Arr  which is to be sorted using Heap Sort.<br> 1) Initially build a max heap of elements in Arr.<br> 2) The root element, that is Arr[1], will contain maximum element of Arr. After that, swap this element with the last element of Arr and heapify the max heap excluding the last element which is already in its correct position and then decrease the length of heap by one.<br> 3)Repeat the step 2, until all the elements are in their correct position.",
  },
};
